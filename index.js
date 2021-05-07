// index.js
const { breedFetcher } = require('./breedFetcher');

const breed = process.argv[2];

breedFetcher(breed, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});