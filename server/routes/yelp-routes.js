const User       = require('../models/user-model');
const express    = require('express');
const GoogleImages = require('google-images');

const client = new GoogleImages('CSE ID', 'API KEY');

const yelpRoutes = express.Router();

var request = require("request");
var Yelp = require('yelp-v3');

var yelp = new Yelp({
  access_token: `${process.env.TOKEN}`,
});

yelpRoutes.get('/api/search/:place&:sort', (req, res, next) => {
  var sort = req.params.sort;
  var place = req.params.place;

  yelp.search({ term: 'food', location: `${place}`, limit: 50, sort_by: `${sort}` })
    .then(function (data) {
      res.status(200).json(data);
    })
    .catch(function (err) {
      res.status(500).json({ message: "Something went wrong" });
    });
});

yelpRoutes.get('/api/get-info/:id', (req, res, next) => {
  var placeId = req.params.id;

  yelp.businesses(`${placeId}`, function(error, data) {
    if (error) {
      res.status(500).json({ message: 'Something went wrong' });
    }
    res.status(200).json(data);
  });
});

module.exports = yelpRoutes;
