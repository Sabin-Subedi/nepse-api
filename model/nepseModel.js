const mongoose = require("mongoose");

const NepseData = mongoose.Schema(
  {
    SN: {
      type: String,
    },
    Symbol: {
      type: String,
    },
    ClosingPrice: {
      type: String,
    },
    OpenPrice: {
      type: String,
    },
    HighPrice: {
      type: String,
    },
    LowPrice: {
      type: String,
    },
    TotalTradedQuantity: {
      type: String,
    },
    TotalTradedVale: {
      type: String,
    },
    TotalTrades: {
      type: String,
    },
    LTP: {
      type: String,
    },
    PreviousDayClosePrice: {
      type: String,
    },
    AverageTradedPrice: {
      type: String,
    },
    "52WeekHigh": {
      type: String,
    },
    "52WeekLow": {
      type: String,
    },
    MarketCapitalization: {
      type: String,
    },
    Date: {
      type: String,
      default: new Date(),
    },
  },
  {
    timestamps: true,
  }
);

const NEPSE = mongoose.model("NEPSE", NepseData);

module.exports = NEPSE;
