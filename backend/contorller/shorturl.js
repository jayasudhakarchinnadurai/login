const shortrouter=require("express").Router();
const ShortModel=require("../schema/shortschema.js")

shortrouter.post("/createurl", async(req,res)=>{
    const {full}=req.body
    try {
        const newshorturl = await ShortModel({
            full:full,
        })
       await newshorturl.save();
       
       res.send({
        message:"create successfull",
        newshorturl
       })

        
    } catch (error) {
        res.send({
            message:'internal server error'
        })
    }

})

shortrouter.get("/geturl",async(req,res)=>{
    

    try {
        const shorturl= await ShortModel.find()
        res.send({
            message:"success full ",
            shorturl
        })
    } catch (error) {
        console.log(error)
        
    }


})



module.exports=shortrouter