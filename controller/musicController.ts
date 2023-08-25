import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()



export default class MusicController{
    public getById(id: string){

    }

    public getAll(){
        prisma.music.findMany()
    }
}