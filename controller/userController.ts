import { User } from "@prisma/client";
import PrismaC from "../configs/prisma"
type newUser ={
    email: string,
    pass: string,
    name: string
}

export default class UserController{
    public static instance: UserController;
    private constructor(){};
    public static getInstance(){
        if(!this.instance){
            this.instance = new UserController();
        }
        return this.instance;
    }

    public async getByEmail(email: string){
        const user = PrismaC.getPrisma().user.findFirst({
            where:{
                email
            }
        })

        return user;
    }

    public async createNewUser({email, name} :User){
        const newUser = PrismaC.getPrisma().user.create({
            data:{
                email,
                name
            }
        })
    }

}