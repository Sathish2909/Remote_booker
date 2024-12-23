import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";
import { createerror } from "../utils/error.js";

export const createRoom=async(req,res,next)=>{
    const hotelId=req.params.hotelid;
    const newRoom=new Room(req.body);

    try{
        const savedRoom=await newRoom.save();
        try{
            await Hotel.findByIdAndUpdate(hotelId,{
                $push:{rooms:savedRoom._id},
            });
        }catch(err){
            next(err);
        }
        res.status(200).json(savedRoom)
    }
    catch(err){
        next(err);
    }
};


export const updateroom= async(req,res,next)=>{
    try{
        const updatedroom = await Room.findByIdAndUpdate(req.params.id,
            {$set:req.body},
            {new:true}
        );
        res.status(200).json(updatedroom)
    }
    catch(err){
        next(err);
    }
}


export const deleteRoom= async(req,res,next)=>{
    const hotelId=req.params.hotelid;
    try{
        await Room.findByIdAndDelete(req.params.id
        );
        try{
            await Hotel.findByIdAndUpdate(hotelId,{
                $pull:{rooms:req.params.id},
            });
        }catch(err){
            next(err);
        }
        res.status(200).json("Room has been deleted")
    }
    catch(err){
        next(err);
    }
}


export const getRoom= async(req,res,next)=>{
    try{
        const Room = await Room.findById(req.params.id
        );
        res.status(200).json(Room)
    }
    catch(err){
        next(err);
    }
}



export const getRooms= async(req,res,next)=>{
    try{
        const Rooms = await Room.find();
        res.status(200).json(Rooms)
    }
    catch(err){
        next(err);
    }
}