const mongoose = require("mongoose")

const hotalSchema = mongoose.Schema({

name:{
    type:String,
    required:true
}
,
room:{
type:[String],
},

city:{
    type:String
}

})

module.exports = mongoose.model("hotal",hotalSchema)