import mongoose from "mongoose";


// Define the data schema for each time range (5y, 1y, 1mo, 3mo)
const DataSchema = new mongoose.Schema({
  value: [Number],
  timeStamp: [Number],
});

// Define the schema for each stock (MSFT, GOOGL, AMZN)
const StockSchema = new mongoose.Schema({
  '5y': DataSchema,
  '1y': DataSchema,
  '1mo': DataSchema,
  '3mo': DataSchema,
});

// Create the model for the entire data structure
const StockDataSchema = new mongoose.Schema({
  AAPL:StockSchema,
  MSFT: StockSchema,
  GOOGL: StockSchema,
  AMZN: StockSchema,
  PYPL:StockSchema,
  TSLA:StockSchema,
  JPM:StockSchema,
  NVDA:StockSchema,
  NFLX:StockSchema,
  DIS:StockSchema,
});


const Stocks = mongoose.model("Stocks", StockDataSchema);

export default Stocks;
