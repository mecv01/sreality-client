const {VERBOSE} = process.env;
const debug = require('debug')('client:index');
const { fetchHouses } = require('./src/SrealityClient');
const { mapProperties } = require('./src/Mapping');

fetchHouses()
  .then((data) => {
    if (VERBOSE) {
      debug(data.result_size);
    }
    return mapProperties(data['_embedded'].estates);
  }).then(debug);
