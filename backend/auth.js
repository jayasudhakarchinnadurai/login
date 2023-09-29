const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");

const passwordhase= async(password)=>{
    const salt =bcrypt.genSaltSync(10)
    const hase = bcrypt.hashSync(password,salt)
    return hase

}

const passwordupdate =async(password)=>{
    const data = bcrypt.genSaltSync(10);
    const value = bcrypt.hashSync(password,data);
    return value
}
const passwordcheck=async(password,hase)=>{
    const hased=bcrypt.compareSync(password,hase)
    return hased
}

const privateKey="adouipnaiooehzlaso"

const createtoken=(payload)=>{
    const token = jwt.sign(payload,privateKey,{expiresIn:"7m"})
    return  token
}

const validate =async(req, res, next)=>{
    if(req.headers.authorization){
        let token =req.headers.authorization.split(" ")[1]
        let data = jwt.decode(token)
        
        if(Math.floor((+new Date())/1000)<data.exp){
            next()
        }
       
        else{
         res.status(402).send({
         message:"token expried"})
            }
       
    }else{
        res.status(400).send({
            message:"invaild token"
        })

    }


}



module.exports={passwordhase,passwordcheck,createtoken,validate,passwordupdate}