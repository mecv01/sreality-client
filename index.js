const debug = require('debug')('client:index');
const { fetchHouses, fetchLocality, fetchProperties } = require('./src/SrealityClient');
const { mapProperties } = require('./src/Mapping');

fetchHouses()
  // .then(data => debug(data.result_size))
  .then(data => mapProperties(data['_embedded'].estates))
  // .then(data => debug(JSON.stringify(data)))
  .then(data => debug(data))
  .catch(err => debug(err.stack));
  // .then(data => debug(data.result_size));

// fetchLocality('zdiby')
//   .then(data => debug(data));


// fetchProperties()
//   .then(data => debug(data));
