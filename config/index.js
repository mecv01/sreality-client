module.exports = {
  sreality: {
    baseOptions: {
      baseURL: 'https://www.sreality.cz/api/cs/v2/',
      port: 443,
      method: 'get',
    },
  },
  mapping: {
    propertyId: ['hash_id'],
    description: ['name'],
    latitude: ['gps', 'lat'],
    longitude: ['gps', 'lon'],
    isNew: ['new'],
    locality: ['locality'],
    seller: ['_embedded', 'company', 'name'],
    price: ['price'],
    images: ['_links', 'images'],
    image: ['href']
  },
};
