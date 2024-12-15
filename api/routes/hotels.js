import express from "express";
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotelcontroller.js";
import { verifyToken ,verifyAdmin,verifyUser} from "../utils/verifyToken.js";

const router=express.Router();

router.post("/",verifyAdmin,createHotel);


router.put("/:id",verifyAdmin,updateHotel);


router.delete("/:id",verifyAdmin,deleteHotel);



router.get("/:id",verifyAdmin,getHotel);


router.get("/",verifyAdmin,getHotels); 
export default router; 