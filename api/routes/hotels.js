import express from "express";
import { countByCity, countByType, createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotelcontroller.js";
import { verifyToken ,verifyAdmin,verifyUser} from "../utils/verifyToken.js";

const router=express.Router();

router.post("/",verifyAdmin,createHotel);


router.put("/:id",verifyAdmin,updateHotel);


router.delete("/:id",verifyAdmin,deleteHotel);



router.get("/find/:id",getHotel);


router.get("/",getHotels);

router.get("/countByCity",countByCity);

router.get("/countByType",countByType);
export default router; 