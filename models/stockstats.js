import mongoose from "mongoose";



// Define the data schema for each time range (5y, 1y, 1mo, 3mo)
const StockstatsSchema = new mongoose.Schema({
       
    AAPL: {
        bookValue:{type:Number},
        profit:{type:Number}
    },
    GOOGL: {
        bookValue:{type:Number},
        profit:{type:Number}
    },
    MSFT: {
        bookValue:{type:Number},
        profit:{type:Number}
    },
    AMZN: {
        bookValue:{type:Number},
        profit:{type:Number}
    },
    PYPL: {
        bookValue:{type:Number},
        profit:{type:Number}
    },
    TSLA: {
        bookValue:{type:Number},
        profit:{type:Number}
    },
    JPM: {
        bookValue:{type:Number},
        profit:{type:Number}
    },
    NVDA: {
        bookValue:{type:Number},
        profit:{type:Number}
    },
    NFLX: {
        bookValue:{type:Number},
        profit:{type:Number}
    },
    DIS: {
        bookValue:{type:Number},
        profit:{type:Number}
    },
});
   

const Stockstats = mongoose.model("Stockstats", StockstatsSchema);

export default Stockstats;
