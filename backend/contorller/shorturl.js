const shortrouter=require("express").Router();
const ShortModel=require("../schema/shortschema.js")

shortrouter.post("/createurl", async(req,res)=>{
    const {full}=req.body
    try {
        const newshorturl = await ShortModel({
            full:full,
        })
       await newshorturl.save();
       
       res.status(200).send({
        message:"create successfull",
        newshorturl
       })

        
    } catch (error) {
        res.status(500).send({
            message:'internal server error'
        })
    }

})

shortrouter.get("/geturl",async(req,res)=>{
    
  try {
        const geturl= await ShortModel.find()
        
        res.send({
            message:"success full ",
            geturl
        })
       
    } catch (error) {
        console.log(error)
        
    }


})

shortrouter.get("/:shorturl",async(req,res)=>{
    
   try {
       const userurl = await ShortModel.findOne({shorturl:req.params.shorturl})   
       userurl.clicks++
       userurl.save()
      res.redirect(userurl.full)

       
   } catch (error) {
    res.status(500).send({
        message:"internal server error"
    })
    
   }

})

module.exports=shortrouter