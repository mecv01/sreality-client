require('babel-polyfill');
const { mergeLeft } = require('ramda')

module.exports = mergeLeft(
    require('./src/PropertyService'),
    require('./src/PublicConstants'));
