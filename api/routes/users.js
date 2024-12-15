import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/usercontroller.js";

const router=express.Router();



router.put("/:id",updateUser);


router.delete("/:id",deleteUser);



router.get("/:id",getUser);


router.get("/",getUsers); 
export default router; 