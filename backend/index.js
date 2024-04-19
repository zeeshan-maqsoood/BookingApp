const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const config=require("./Config/index")
console.log(config,"config")
const ConnectDB=require("./Database/db")
const OrderRoutes=require("./Routes/order")
ConnectDB()
require("dotenv").config()
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors())


app.use("/api",OrderRoutes)

const PORT=process.env.PORT||5000
app.listen(PORT, () => {
  console.log(`server is start on port 5000 http://localhost:5000`);
});
