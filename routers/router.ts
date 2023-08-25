import express, { NextFunction, Request, Response } from "express";
import { buffer } from "stream/consumers";
const { Readable } = require('stream');
import { storeMusic, getMusic } from "../controller/primaController"; 
import userMiddleware from "../middleware/userMiddleware";
import { Music } from "@prisma/client";
const router = express.Router();
const cors = require('cors')
const multer  = require('multer');
const upload = multer();



const corsOptions = {
    origin:'*' ,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
router.use(cors(corsOptions))



router.get('/',(req,res,next)=>{


    res.send('hello')
})

router.get('/music:id', async (req: Request, res: Response)=>{
    const { id } = req.params;

    if(id){
      const music = await getMusic(id);

      if(music){
        const arr = JSON.parse(music.binary).buffer.data;
        console.log(Buffer.from(arr));
  
        const stream = Readable.from(Buffer.from(arr));
  
        
        stream.pipe(res);
      }
    }

    
})

router.post('/user', userMiddleware.checkUser, async (req: any, res: Response)=>{

    // const nj = JSON.stringify(req.file);
    // storeMusic(nj);
    // const t = JSON.parse(nj);
    // console.log(t)
  
   


    //     // só exibe quando terminar de enviar tudo
    // stream.on('end', (e:any) =>{
    //   console.log('e',e)
    //    console.log('acabou')
    //   });


    
    // faz streaming do audio 

    // res.send('req.file.buffer');
  })

export default router;