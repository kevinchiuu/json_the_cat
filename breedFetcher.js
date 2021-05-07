const request = require("request");

let API = 'api_key=5732dce0-43ad-471b-91b4-0b560f5f0dc2';


const breedFetcher = function(breed) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`,
    (err, res, body) => {
      if (err) {
        console.log(err);
      }
      const data = JSON.parse(body);
      console.log(data);
    });
};

breedFetcher();