const {
  createRefreshStockPricesTask,
} = require("./createRefreshStockPricesTask");
const { scheduleTask } = require("./scheduleTask");

const SYMBOL = "TSLA";

module.exports = {
  scheduleTask,
  tasks: [createRefreshStockPricesTask(SYMBOL)],
};
