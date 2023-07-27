import express from "express";
import { getStocks, getStocksProfile, getStocksStats, poststocks, poststocksprofile, poststockstats } from "../controllers/stockcontroller.js";



const Router= express.Router();

Router.post('/poststocks',poststocks)
Router.post('/poststocksprofile',poststocksprofile)
Router.post('/poststockstats',poststockstats)
Router.get('/getstocksdata',getStocks)
Router.get('/getstocksprofiledata',getStocksProfile)
Router.get('/getstockstatsdata',getStocksStats)





export default Router;