const url = require('url');
const axios = require('axios');
const { mergeLeft } = require('ramda');
const debug = require('debug')('api-client:SrealityClient');
const config = require('../config').sreality;
const { errorAndDebug } = require('./utils/ErrorHandler');

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

const fetch = async (path, querystring) => {
  const requestOptions = {
    ...config.baseOptions,
    url: url.format({
      pathname: path,
      query: querystring,
    }),
  };

  debug(requestOptions);

  try {
    const response = await axios(requestOptions);
    const data = await response.data;
    return data;
  } catch (err) {
    throw errorAndDebug('NETWORK_ERROR', 'The request failed to resolve.');
  }
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

/*
TODO: fetch localities
const fetchLocality = async (locality) => {
  const query = {
    tms: (new Date()).getTime(),
    phrase: locality,
  };

  return fetch('/suggest', query);
};
 */

const fetchHousesFromAPI = async (page, pageSize, regionType, regionId) => {
  const type = PROPERTY_TYPES.HOUSE;
  return fetchProperties(page, pageSize-1, type, regionType, regionId);
};

const fetchFlatsFromAPI = async (page, pageSize, regionType, regionId) => {
  const type = PROPERTY_TYPES.FLAT;
  return fetchProperties(page, pageSize-1, type, regionType, regionId);
};

const fetchParcelsFromAPI = async (page, pageSize, regionType, regionId) => {
  const type = PROPERTY_TYPES.PARCEL;
  return fetchProperties(page, pageSize-1, type, regionType, regionId);
};

module.exports = {
  PROPERTY_TYPES,
  fetchHousesFromAPI,
  fetchFlatsFromAPI,
  fetchParcelsFromAPI,
};
