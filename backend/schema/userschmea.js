const mongoose=require("mongoose")
const validator=require("validator")

const userSechema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        lowercase:true,
        required:true,
        validate:(value)=>{

            return validator.isEmail(value)
        }

    },

    password:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,default:Date.now}

},
{
    versionKey:false
}

)

const user =mongoose.model("userrecord",userSechema);
module.exports=user