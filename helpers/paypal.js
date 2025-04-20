const dotenv = require("dotenv");
const paypal = require("paypal-rest-sdk");
dotenv.config();

paypal.configure({
  mode:"sandbox",
  client_id:process.env.client_id,
  client_secret:process.env.client_secret,
});

module.exports = paypal;
