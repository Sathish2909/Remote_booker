import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import hotelRoute from "./routes/hotels.js";
import roomRoute from "./routes/rooms.js";
import userRoute from "./routes/users.js";

const app=express();
dotenv.config()

const connect=async()=>{
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("connected to mongodb")

    }catch(error){
        throw error;
    }
}; 

mongoose.connection.on("disconnected", ()=>{
    console.log("mongodb disconnected")
});

// mongoose.connection.on("connected", ()=>{
//     console.log("mongodb connected")
// });


// app.get("/",(req,res)=>{
//     res.send("checking");
// });
app.use(express.json());
app.use("/api/auth",authRoute);
app.use("/api/room",roomRoute);
app.use("/api/hotel",hotelRoute);
app.use("/api/user",userRoute);

app.use((err,req,res,next)=>{
    const errStatus=err.status || 500;
    const errMessage=err.message || "Something went wrong";
    return res.status(errStatus).json({
        success : false,
        status :errStatus,
        message : errMessage,
        stack :err.stack,
    }); 
        
});


app.listen(5050,()=>{
    connect()
    console.log("connected to backend")
}); 