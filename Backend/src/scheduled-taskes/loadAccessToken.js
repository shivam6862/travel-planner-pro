const dotenv = require("dotenv");
const axios = require("axios");
dotenv.config();

const loadAccessToken = async (symbol) => {
  const clientId = process.env.AMADEUS_API_KEY;
  const clientSecret = process.env.AMADEUS_API_SECRET;

  const url = "https://test.api.amadeus.com/v1/security/oauth2/token";
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  const data = new URLSearchParams({
    grant_type: "client_credentials",
    client_id: clientId,
    client_secret: clientSecret,
  });

  // const response = await fetch(url, {
  //   method: "POST",
  //   headers,
  //   body: data,
  // });
  const response = await axios(url, data, { headers });
  // const history = await response.json();
  return response.data;
};

module.exports = { loadAccessToken };
