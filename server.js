const express = require("express")
const app = express()
const mongoose = require("mongoose")
require("dotenv/config")

app.use(express.json());


const hotalRoute = require("./routes/hotals")
app.use("/hotals",hotalRoute)

const RoomRoute = require("./routes/rooms")
app.use("/rooms",RoomRoute)

const  connect = async () =>{ 

try {
    const data = await mongoose.connect(process.env.DB_CONNECTION,{})
    console.log("data")
  } catch (err) {
    console.log(err)
  }


  
}
connect()

app.listen(3000,(req,res)=>{
    console.log("hellow")
})



