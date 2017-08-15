const User       = require('../models/user-model');

const yelpRoutes = express.Router();

var Yelp = require('yelp');

const CONSUMER_KEY = process.env.CONSUMER_KEY;
const CONSUMER_SECRET = process.env.CONSUMER_SECRET;
const TOKEN = process.env.TOKEN;
const TOKEN_SECRET = process.env.TOKEN_SECRET;

var yelp = new Yelp({
  consumer_key: `${CONSUMER_KEY}`,
  consumer_secret: `${CONSUMER_SECRET}`,
  token: `${TOKEN}`,
  token_secret: `${TOKEN_SECRET}`,
});

module.exports = yelpRoutes;
