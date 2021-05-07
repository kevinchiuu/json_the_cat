const request = require('request');

const breedFetcher = function(breed, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`,
    (err, res, body) => {

      const data = JSON.parse(body);

      if (err) {
        callback(err, null);
        return;
      } else if (data[0]) {
        callback(null, data[0].description.trim());
      } else if (!data[0]) {
        callback(null, 'Breed doesnt exist');
      }
    });
};

module.exports = {breedFetcher};