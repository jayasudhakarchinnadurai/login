const express =require("express");
const useRouter = require("./contorller/user.js");
const shortrouter=require("./contorller/shorturl.js")
const App_server =express();
const body_parser= require("body-parser")
require("./db.js")
App_server.use(body_parser.urlencoded({extended:true}))
App_server.use(body_parser.json());
App_server.use("/api",useRouter);
App_server.use("/api",shortrouter)

module.exports=App_server;
