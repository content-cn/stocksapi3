import StocksProfile from "../models/stocksprofile.js";
import Stocks from "../models/stocksschema.js";
import Stockstats from "../models/stockstats.js";

const poststocks= async(req,res)=>{
    console.log('reaching conytoller')
    console.log(req.body);
    const body=req.body;
    const savestockdata=await new Stocks(body).save();
    console.log('saved')
    res.status(200).json({message:'stocks posted'})

}

const poststocksprofile=async(req,res)=>{
    
    console.log(req.body);
    const body=req.body;
    const savestockdata=await new StocksProfile(body).save();
    console.log('saved')
    res.status(200).json({message:'stocks posted'})
}

const poststockstats=async(req,res)=>{
    
    console.log(req.body);
    const body=req.body;
    const savestockdata=await new Stockstats(body).save();
    console.log('saved')
    res.status(200).json({message:'stocks posted'})
}



const getStocks = async (req, res) => {
    try {
      const data = await Stocks.find({}); 
      console.log(data);
      res.json({ message: "stocks Data", stocksData: data });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error retrieving  data" });
    }
  };

  const getStocksProfile = async (req, res) => {
    try {
      const data = await StocksProfile.find({}); 
      console.log(data);
      res.json({ message: "stocks Data", stocksProfileData: data });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error retrieving  data" });
    }
  };

  const getStocksStats = async (req, res) => {
    try {
      const data = await Stockstats.find({}); 
      console.log(data);
      res.json({ message: "stocks Data", stocksStatsData: data });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error retrieving  data" });
    }
  };

export {poststocks,poststocksprofile,poststockstats,getStocks,getStocksProfile,getStocksStats}