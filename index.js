import express from 'express'
import Connecton from "./database/db.js";
import dotenv from 'dotenv';
import Router from "./Routes/Router.js";

import cors from 'cors';

import bodyParser from "body-parser";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';


const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());


// const currentModuleUrl = import.meta.url;

// // Convert the URL to a file path
// const currentModulePath = fileURLToPath(currentModuleUrl);

// // Get the directory path of the current module
// const currentDir = dirname(currentModulePath);
// app.use(express.static(join(currentDir, 'frontend', 'build')));


app.use('/api/stocks',Router);


// app.get('*', (req, res) => {
//   res.sendFile(join(currentDir, 'frontend', 'build', 'index.html'));
// });

const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;


const PORT= process.env.PORT || 8000;


Connecton(username,password);

app.listen(PORT,()=>{
 console.log(`server is successfully listeing at ${PORT} port`)


});