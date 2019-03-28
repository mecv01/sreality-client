const { path, map } = require('ramda');
const debug = require('debug')('client:Mapping');
const { mapping } = require('./../config');

const mapImage = image => path(mapping.image, image);

const mapImages = images => map(mapImage, images);

const mapProperty = (property) => {
  const id = path(mapping.propertyId, property);
  const toReturn = {
    propertyId: id,
    description: path(mapping.description, property),
    coordinates: {
      latitude: path(mapping.latitude, property),
      longitude: path(mapping.longitude, property),
    },
    isNew: path(mapping.isNew, property),
    locality: path(mapping.locality, property),
    seller: path(mapping.seller, property),
    price: path(mapping.price, property),
    images: mapImages(path(mapping.images, property)),
    webLink: `https://www.sreality.cz/detail/1/2/3/4/${id}`
  };
  return toReturn;
};

const mapProperties = properties => map(mapProperty, properties);

module.exports = {
  mapProperties,
};
