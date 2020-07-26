# Sreality.cz

Javascript API client for the Sreality REST API.

## Interface

### House Collection

Parameters: 
```
page = 1, pageSize = 5, regionType = 'municipality', regionId = 3468
```

Example: 

```
const { fetchHouses } = require('sreality-client');

fetchHouses(1, 5, 'municipality', 3468).then((data) => {
    console.log('My Houses...', data);
});
```

### Flat Collection

Parameters: 
```
page = 1, pageSize = 5, regionType = 'municipality', regionId = 3468
```

Example: 

```
const { fetchFlats } = require('sreality-client');

fetchFlats(1, 5, 'municipality', 3468).then((data) => {
    console.log('My Flats...', data);
});
```

### Parcels Collection

Parameters: 
```
page = 1, pageSize = 5, regionType = 'municipality', regionId = 3468
```

Example: 

```
const { fetchParcels } = require('sreality-client');

fetchParcels(1, 5, 'municipality', 3468).then((data) => {
    console.log('My Parcels...', data);
});
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

## Publishing

Create release branch from ```devel```
```
git checkout -b release/vX.X.X
```

Update: README, CHANGELOG

Increment the version
```
npm version major|minor|patch
```

Build
```
npm run build
```

Publish
```
cd ./build
npm login
npm publish
```

## Disclaimer

This is not an official API. I am not affiliated with Sreality.cz in any way, and am not responsible for any damage that could be done with it.

I have only implemented very few functions that I need for a project.

I'd be happy to give up this library for an official and supported library.

I have built this library to retrieve properties from the REST API.

