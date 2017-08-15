const User       = require('../models/user-model');
const express    = require('express');

const yelpRoutes = express.Router();

var Yelp = require('yelp-v3');

var yelp = new Yelp({
  access_token: `${process.env.TOKEN}`,
});

yelpRoutes.get('/api/search', (req, res, next) => {
  console.log(yelp.consumer_key, yelp.consumer_secret, yelp.token);
  yelp.search({ term: 'food', location: 'Montreal' })
    .then(function (data) {
      res.status(200).json(data);
    })
    .catch(function (err) {
      res.status(500).json({ message: "Something went wrong" })
    });
});

module.exports = yelpRoutes;
