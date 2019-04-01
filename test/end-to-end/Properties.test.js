/**
 * @jest-environment node
 */
const { matchers } = require('jest-json-schema');
expect.extend(matchers);

const { fetchHouses, fetchFlats, fetchParcels } = require('../../index');
const schema = require('./../_data/propertiesCollectionSchema.json');

test('get Houses', async () => {
  const houses = await fetchHouses();
  expect(houses).toMatchSchema(schema);
});

test('get Flats', async () => {
  const flats = await fetchFlats();
  expect(flats).toMatchSchema(schema);
});

test('get Parcels', async () => {
  const parcels = await fetchParcels();
  expect(parcels).toMatchSchema(schema);
});
