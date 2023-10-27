const asyncHandler=require("express-async-handler");

//@description Get all contacts
// @route
//@acces public



const getContact=asyncHandler((req,res)=>{
    res.status(200).json({message:"Get All Conatcts"});
 }) 

 const postContact=asyncHandler(async(req,res)=>{
    console.log(req.body);
    const{name,email,phone}=req.body;
    if(!name || !email || !phone)
    {
        res.status(400);
         throw new Error("All fields are mandatory");
    }
    res.status(201).json({message:"Create Conatcts"});
 }) 

 const deleteContact=asyncHandler(async(req,res)=>{
    res.status(200).json({message:`Delete Contacts for ${req.params.id} `});
 }) 

 const updateContact=asyncHandler(async(req,res)=>{
    res.status(200).json({message:`Update Contacts for ${req.params.id} `});
 } )

 module.exports = { getContact,postContact,deleteContact,updateContact }; 