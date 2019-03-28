const url = require('url');
const axios = require('axios');
const { mergeLeft } = require('ramda');
const debug = require('debug')('client:SrealityClient');
const config = require('./../config').sreality;

const PROPERTY_TYPES = {
  ALL: {},
  HOUSE: {
    category_main_cb: 2,
    category_type_cb: 1,
  },
  FLAT: {
    category_main_cb: 1,
    category_type_cb: 1,
  },
  PARCEL: {
    category_main_cb: 3,
    category_type_cb: 1,
  },
};

const fetch = async (path, qs) => {
  const requestOptions = config.baseOptions;
  requestOptions.url = url.format(
    {
      pathname: path,
      query: qs,
    },
  );

  debug(requestOptions);    

  const res = await axios(requestOptions);
  const data = await res.data;

  return data;
};

const fetchProperties = async (page = 1, pageSize = 50, propertyType, regionType = 'municipality', regionId = 3468) => {
  let query = {
    tms: (new Date()).getTime(),
    per_page: pageSize,
    page,
  };

  if (propertyType) {
    query = mergeLeft(query, propertyType);
    debug('PropertyType not empty, merging ... ', query);
  }

  if (regionType && regionId) {
    query = mergeLeft(query, {
      region_entity_type: regionType,
      region_entity_id: regionId,
    });

    debug('regionType & regionId not empty, merging ... ', query);
  }

  return fetch('/estates', query);
};

const fetchLocality = async (locality) => {
  const query = {
    tms: (new Date()).getTime(),
    phrase: locality,
  };

  return fetch('/suggest', query);
};

const fetchHouses = async (page, pageSize, regionType, regionId) => {
  const houseType = PROPERTY_TYPES.HOUSE;
  return fetchProperties(page, pageSize, houseType, regionType, regionId);
};

module.exports = {
  PROPERTY_TYPES,
  fetchLocality,
  fetchProperties,
  fetchHouses,
};
