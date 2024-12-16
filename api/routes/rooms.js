import express from "express";

import { verifyToken ,verifyAdmin,verifyUser} from "../utils/verifyToken.js";
import { createRoom, deleteRoom, getRoom, getRooms, updateroom } from "../controllers/roomcontroller.js";

const router=express.Router();

router.post("/:hotelid",verifyAdmin,createRoom);


router.put("/:id",verifyAdmin,updateroom);


router.delete("/:id/:hotelid",verifyAdmin,deleteRoom);



router.get("/:id",getRoom);


router.get("/",getRooms); 
export default router; 