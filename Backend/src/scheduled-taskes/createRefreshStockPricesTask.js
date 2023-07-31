const { loadAccessToken } = require("./loadAccessToken");

const createRefreshStockPricesTask = (symbol) => ({
  frequency: 900000,
  handler: async (app) => {
    try {
      console.log("Refershing access token...");
      const updatedAccessToken = await loadAccessToken(symbol);
      console.log(updatedAccessToken);
      app.locals.access_token = await updatedAccessToken?.access_token;
      // this stockHistory can be used inside the route by using req.app.locals.stockHistory
      // This is the way to make availablw stockHistory to all the endpoints
    } catch (e) {
      console.log("Unable to refresh stock history data");
      console.log(e);
    }
  },
});

module.exports = { createRefreshStockPricesTask };
