const User       = require('../models/user-model');
const express    = require('express');

const yelpRoutes = express.Router();

var request = require("request");
var Yelp = require('yelp-v3');

var yelp = new Yelp({
  access_token: `${process.env.TOKEN}`,
});

yelpRoutes.post('/api/search/:place', (req, res, next) => {
  var place = req.params.place;

  yelp.search({ term: 'food', location: `${place}`, limit: 50, sort_by: "rating" })
    .then(function (data) {
      res.status(200).json(data);
    })
    .catch(function (err) {
      res.status(500).json({ message: "Something went wrong" });
    });
});

module.exports = yelpRoutes;
