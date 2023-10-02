const mongoose=require("mongoose");
const shortid = require('shortid');
const shortSchema= new mongoose.Schema({
    full:{
      type:String,
      required:true,

    },
    shorturl:{
        type:String,
        required:true,
        default:shortid.generate
    },
    clicks:{
        type:Number,
        required:true,
        default:0
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
    

},
{
    versionKey:false
}
)


const ShortModel=mongoose.model("shorturl",shortSchema);
module.exports=ShortModel