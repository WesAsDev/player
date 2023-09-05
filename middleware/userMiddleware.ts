import { User, Music } from "@prisma/client";
import { NextFunction, Request, RequestHandler } from "express";
import UserController from "../controller/userController";



export default class UserMiddleware{

    public static async checkUser(Request: any, Response: any, next: any){
        const newUserBody = Request.body;
        console.log(newUserBody);
        try{
            const user = await UserController.getInstance().createNewUser(newUserBody);

            Request.body = {...user, msg:'Usuario criado com sucesso'};
        }catch(error){
            console.log(error)
        }

        next();
    }
}