import { Music } from "@prisma/client";
import PrismaC from "../configs/prisma";



export default class MusicController{
    public async getById(id: number){
        const music = await PrismaC.getPrisma().music.findUnique({
            where:{
                id: id
            }
        })

        return music;
    }

    public async getAll(){
        const music = await PrismaC.getPrisma().music.findMany();
        
        return music;
    }

    public async insertMusic(music: Music){
        const newMusic = await PrismaC.getPrisma().music.create({
            data:music
        })

        return newMusic;
    }
}