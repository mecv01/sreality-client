const { mapImage, mapImages } = require('../../src/utils/Mapping');

test('extract link from an object with a given structure', () => {
  const obj = {
    href: 'https://d18-a.sdn.szn.cz/d_18/c_img_F_9/GEkhjQ.jpeg?fl=res,400,300,3|shr,,20|jpg,90',
  };
  expect(mapImage(obj)).toBe('https://d18-a.sdn.szn.cz/d_18/c_img_F_9/GEkhjQ.jpeg?fl=res,400,300,3|shr,,20|jpg,90');
});

test('extract link from an empty object', () => {
  const obj = {};
  expect(mapImage(obj)).toBe(undefined);
});

test('extract link from an unknown object structure', () => {
  const obj = { p1: 'v1' };
  expect(mapImage(obj)).toBe(undefined);
});

test('extract links from an array with a given structure', () => {
  const arr = [
    {
      href: 'https://d18-a.sdn.szn.cz/d_18/c_img_F_9/GEkhjQ.jpeg?fl=res,400,300,3|shr,,20|jpg,90',
    },
    {
      href: 'https://d18-a.sdn.szn.cz/d_18/c_img_E_BF/A3v311.jpeg?fl=res,400,300,3|shr,,20|jpg,90',
    },
    {
      href: 'https://d18-a.sdn.szn.cz/d_18/c_img_E_BG/bBdB7Yi.jpeg?fl=res,400,300,3|shr,,20|jpg,90',
    },
  ];
  const output = [
    'https://d18-a.sdn.szn.cz/d_18/c_img_F_9/GEkhjQ.jpeg?fl=res,400,300,3|shr,,20|jpg,90',
    'https://d18-a.sdn.szn.cz/d_18/c_img_E_BF/A3v311.jpeg?fl=res,400,300,3|shr,,20|jpg,90',
    'https://d18-a.sdn.szn.cz/d_18/c_img_E_BG/bBdB7Yi.jpeg?fl=res,400,300,3|shr,,20|jpg,90',
  ];
  expect(mapImages(arr)).toEqual(output);
});

test('extract links from an empty array', () => {
  const arr = [];
  expect(mapImages(arr)).toEqual([]);
});
