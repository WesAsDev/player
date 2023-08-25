import express, { NextFunction, Request, Response } from "express";
import { buffer } from "stream/consumers";
const { Readable } = require('stream');
import { storeMusic, getMusic } from "../controller/primaController"; 

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

router.get('/user',upload.single('data'), (req: any, res: Response, next: NextFunction)=>{

    console.log(req.blob);
    next();
  },async (req: any, res: Response, next: NextFunction)=>{

    // const nj = JSON.stringify(req.file);
    // storeMusic(nj);
    // const t = JSON.parse(nj);
    // console.log(t)
    const t = await getMusic(1);

    if(t){
      const arr = JSON.parse(t.binary).buffer.data;
      console.log(Buffer.from(arr));

      const stream = Readable.from(Buffer.from(arr));

      
      stream.pipe(res);
    }


    //     // só exibe quando terminar de enviar tudo
    // stream.on('end', (e:any) =>{
    //   console.log('e',e)
    //    console.log('acabou')
    //   });


    
    // faz streaming do audio 

    // res.send('req.file.buffer');
  })

export default router;