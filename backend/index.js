const express = require("express");
const App_server = require("./app.js");
const node_server =express();
require("dotenv").config()
node_server.use("/",App_server)

node_server.listen(process.env.PORT,()=>console.log(`your server start ${process.env.PORT}`))