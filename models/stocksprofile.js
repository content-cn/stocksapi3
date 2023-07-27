import mongoose from "mongoose";



// Define the data schema for each time range (5y, 1y, 1mo, 3mo)
const StocksprofileSchema = new mongoose.Schema({
       
    AAPL: {
        summary:{type:String}
    },
    GOOGL: {
        summary:{type:String}
    },
    MSFT: {
        summary:{type:String}
    },
    AMZN: {
        summary:{type:String}
    },
    PYPL: {
        summary:{type:String}
    },
    TSLA: {
        summary:{type:String}
    },
    JPM: {
        summary:{type:String}
    },
    NVDA: {
        summary:{type:String}
    },
    NFLX: {
        summary:{type:String}
    },
    DIS: {
        summary:{type:String}
    },
});
   

const StocksProfile = mongoose.model("StocksProfile", StocksprofileSchema);

export default StocksProfile;
