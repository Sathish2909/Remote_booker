import jwt from "jsonwebtoken";
import { createerror } from "./error.js";

export const verifyToken =(req,res,next)=>{
    const token=req.cookies.access_token;
    if(!token){
        return next(createerror(401,"you are not authenticated"));
    }
    jwt.verify(token,process.env.JWT,(err,user)=>{
        if(err) return next(createerror(403,"Token is not valid!"));
        req.user=user;
        next()
    });
};


export const verifyUser=(req,res,next)=>{
    verifyToken(req,res,next,()=>{
        if(req.user.id===req.params.id || req.user.isAdmin){
            next()
        }
        else{
            if(err) return next(createerror(401,"you are not authenticated"));
        }
    })

};


export const verifyAdmin=(req,res,next)=>{
    verifyToken(req,res,next,()=>{
        if(req.user.isAdmin){
            next()
        }
        else{
            if(err) return next(createerror(401,"you are not authenticated"));
        }
    })

}
