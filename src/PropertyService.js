const { path } = require('ramda');
const {
  fetchHousesFromAPI,
  fetchFlatsFromAPI,
  fetchParcelsFromAPI,
} = require('./SrealityClient');
const { mapProperties } = require('./utils/Mapping');

const fetchHouses = async (page, pageSize, regionType, regionId, options) => fetchHousesFromAPI(page, pageSize, regionType, regionId, options)
  .then((data) => {
    const propertyData = path(['_embedded', 'estates'], data);
    const mappedData = mapProperties(propertyData);
    return mappedData;
  });

const fetchFlats = async (page, pageSize, regionType, regionId, options) => fetchFlatsFromAPI(page, pageSize, regionType, regionId, options)
  .then((data) => {
    const propertyData = path(['_embedded', 'estates'], data);
    const mappedData = mapProperties(propertyData);
    return mappedData;
  });

const fetchParcels = async (page, pageSize, regionType, regionId, options) => fetchParcelsFromAPI(page, pageSize, regionType, regionId, options)
  .then((data) => {
    const propertyData = path(['_embedded', 'estates'], data);
    const mappedData = mapProperties(propertyData);
    return mappedData;
  });

module.exports = {
  fetchHouses,
  fetchFlats,
  fetchParcels,
};
