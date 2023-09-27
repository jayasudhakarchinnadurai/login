const useRouter = require("express").Router();
const userModel=require("../schema/userschmea.js")
const {passwordhase,passwordcheck, createtoken, validate, passwordupdate}=require("../auth.js")



useRouter.get("/data" ,validate ,async(req, res)=>{

try {
    const user =await userModel.find()
    res.status(200).send({
        user,
        message:"user data fetch successfull"
    })
    
} catch (error) {
    res.status(500).send({
        message:"internal server error"
    })
    
}

})








useRouter.post("/user",async(req,res)=>{
    const {email, password}=req.body
    
    try {
        const user = await userModel.findOne({email:email})
        const check= await passwordcheck(password,user.password)
        const token=createtoken({
            name:user.name, 
            email:user.email,
            id:user._id
        })
        

        if(check == true ){
            res.status(201).send({
                message:"login sucessful",
                data:token
            })

        }else{
            res.send({
                message:"login faild"
            })
        }
    
    } catch (error) {
        res.send({
            message:"internal server error"
        })
        
    }

})

useRouter.post("/createuser", async(req,res)=>{
    const {name, email, password}=req.body
    try {
        const value = await passwordhase(password)
        const userdata = await userModel({
            name:name,
            email:email,
            password:value
        })
        userdata.save();

        res.status(201).send({
            message:"user create successfull",
            userdata

        })
    } catch (error) {
        res.send({message:"internal server error"})
        
    }

})

useRouter.patch("/edit", async(req,res)=>{
    try {
        const {email,password}=req.body
        const user= await userModel.findOne({email:email});
        const updatepass= await passwordupdate(password)
        const edit =  await userModel.findByIdAndUpdate(user.id,
            {$set:
            {
            
          password:updatepass
           }})
           res.send({
            message:"update succesfull",
            data:edit

           })

    } catch (error) {
        console.log(error)
        
    }

})

module.exports=useRouter;