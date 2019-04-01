const { path } = require('ramda');
const {
  fetchHousesFromAPI,
  fetchFlatsFromAPI,
  fetchParcelsFromAPI,
} = require('./SrealityClient');
const { mapProperties } = require('./utils/Mapping');

const fetchHouses = async () => fetchHousesFromAPI()
  .then((data) => {
    const propertyData = path(['_embedded', 'estates'], data);
    const mappedData = mapProperties(propertyData);
    return mappedData;
  });

const fetchFlats = async () => fetchFlatsFromAPI()
  .then((data) => {
    const propertyData = path(['_embedded', 'estates'], data);
    const mappedData = mapProperties(propertyData);
    return mappedData;
  });

const fetchParcels = async () => fetchParcelsFromAPI()
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
