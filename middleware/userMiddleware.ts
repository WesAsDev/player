import { User, Music } from "@prisma/client";
import { NextFunction, Request, RequestHandler } from "express";
import UserController from "../controller/userController";



export default class UserMiddleware{

    public static checkUser(Request: any, Response: any, next: any){
        const newUserBody = Request.body;
        console.log(newUserBody);
        try{
            UserController.getInstance().createNewUser(newUserBody);

          
        }catch(error){
            console.log(error)
        }

        next();
    }
}