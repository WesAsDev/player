import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

export default class PrismaC{

    private static readonly prisma = prisma;

    public static getPrisma(){
        return this.prisma;
    }

}