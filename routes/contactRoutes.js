const express=require("express");

const router=express.Router();
const{getContact}=require("../controllers/contactContrller");
const{postContact}=require("../controllers/contactContrller");
const{deleteContact}=require("../controllers/contactContrller");
const{updateContact}=require("../controllers/contactContrller");

router.route("/").get(getContact).post(postContact);
router.route("/:id").put(updateContact).delete(deleteContact);

 module.exports=router;