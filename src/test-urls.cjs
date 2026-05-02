const https = require('https');

const urls = [
  'https://images.unsplash.com/photo-1540555700878-1b4327848d22',
  'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c',
  'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b',
  'https://images.unsplash.com/photo-1498837167922-41c37b5afa01',
  'https://images.unsplash.com/photo-1611077544319-3c72b2ff826a',
  'https://images.unsplash.com/photo-1583485088016-52f11edb5502',
  'https://images.unsplash.com/photo-1556228578-0d85b1a4d571',
  'https://images.unsplash.com/photo-1544161515-466d6e4b9533'
];

urls.forEach(url => {
  https.request(url, { method: 'HEAD' }, res => {
    console.log(url, res.statusCode);
  }).end();
});
