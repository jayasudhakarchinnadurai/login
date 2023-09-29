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








useRouter.post("/user" ,async(req,res)=>{
    const {email, password}=req.body
    
    try {

        const user = await userModel.findOne({email:email})
        if(user){
            const check= await passwordcheck(password,user.password)
        const token=createtoken({
            name:user.name, 
            email:user.email,
            id:user._id
        })
           if(check == true){
            res.status(200).send({
                message:"login successfull",
                token
               
            })
           }else{
            res.status(402).send({
                message:"password wrong"
            })
           }
        }else{
            res.status(401).send({
                        message:"invalid credentials"
                    })
        }
            
    } catch (error) {
        res.status(500).send({
            message:"internal server error",
            error
        })
        
    }

})

useRouter.post("/createuser", async(req,res)=>{
    const {name, email, password}=req.body

    try {
        
        const user= await userModel.findOne({email:email})
        if(!user){
            const value = await passwordhase(password)
            const userdata = await userModel({
                name:name,
                email:email,
                password:value
            })
            userdata.save();
            res.status(201).send({
                message:"sign up successful"
            })
        }else {
          
            res.status(400).send({
                message:"its email already taken",
               
    
            })
        }
       

        
    } catch (error) {
        res.status(500).send({message:"internal server error",error})
        
    }

})

useRouter.post("/check",async(req,res)=>{
    
            const { email}=req.body

    try {
         
        const user= await userModel.findOne({email:email})
        
        if(!user){
            res.status(400).send({
                message:"invaild email",
               
            })
        }else {
            
            res.status(201).send({
                message:"fetch successful",
                
    
            })
        }
       

        
    } catch (error) {
        res.status(500).send({message:"internal server error",error})
        
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
           res.status(201).send({
            message:"update succesfull",
            data:edit

           })

    } catch (error) {
        res.status(500).send({
            message:error
        })
        
    }

})

module.exports=useRouter;