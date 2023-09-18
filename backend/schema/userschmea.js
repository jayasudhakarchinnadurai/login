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
    }

},
{
    versionKey:false
}

)

const user =mongoose.model("customer",userSechema);
module.exports=user