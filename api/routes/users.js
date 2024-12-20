import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/usercontroller.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router=express.Router();


router.get("/authenticator",verifyToken,(req,res,next)=>{
    res.send("you're logged in")
})

router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
    res.send("you're logged in and you can delete your account")
})

router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
    res.send("hello admin you're logged in and you can delete your account")
})



router.put("/:id",verifyUser,updateUser);


router.delete("/:id",verifyUser,deleteUser);



router.get("/:id",verifyUser,getUser);


router.get("/",verifyAdmin,getUsers); 
export default router; 