# Sreality.cz

Javascript API client for the Sreality REST API.

## Interface

Parameters: 
```
page = 1, pageSize = 50, regionType = 'municipality', regionId = 3468
```

Example: 
```
const { fetchHouses, fetchFlats, fetchParcels } = require('sreality-api-client');
const houses = await fetchHouses(1, 50, 'municipality', 3468);
const flats = await fetchFlats(1, 50, 'municipality', 3468);
const parcels = await fetchParcels(1, 50, 'municipality', 3468);

console.log(houses);
console.log(flats);
console.log(parcels);

```

## Build

```
npm run build
```

## Tests

Run all the tests suite:
```
npm test
```

### Coverage
```
npm run test:coverage
```

## Linting

```
npm run eslint
```

## Disclaimer

This is not an official API. I am not affiliated with Sreality.cz in any way, and am not responsible for any damage that could be done with it.

I have only implemented very few functions that I need for a project.

I'd be happy to give up this library for an official and supported library.

I have built this library to retrieve properties from the REST API.

