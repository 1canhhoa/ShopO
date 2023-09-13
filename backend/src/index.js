const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const mongodb = require('./configs/mongodb')
const cookieParser = require("cookie-parser")
const bodyParser = require('body-parser')
const fileupload = require("express-fileupload")
const initWebroute = require('./routes/route')
const ErrorHandler = require('./utils/ErrorHandle')
require('module-alias/register')

const app = express()
const corsConfig = {
  origin: true,
  credentials: true,
};
mongodb()

dotenv.config()
app.use(express.json())
app.use(cookieParser())

app.use('/',express.static("uploads"))
app.use(bodyParser.urlencoded({extended:true,limit:"50mb"}))

app.use(cors(corsConfig));
app.options('*', cors(corsConfig));

initWebroute(app)
app.use(function (err, req, res, next) {
  console.error(err);
  res.status(err.statusCode || 500).json(err.message);
});

const server = app.listen(process.env.PORT)

// unhandled promise rejection
process.on("",(err)=>{
  console.log("shutting downthe server for",err.message);
  console.log("shutting downthe server for unhandled promise rejection");
  server.close(()=>{
    process.exit(1)
  })
})