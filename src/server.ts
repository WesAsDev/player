import express, { Application } from "express"
import router from "../routers/router";

const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "https://seu_site.com");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

app.use('/', router);
app.listen(3333, ()=>{
    console.log('running on localhost:3333')
})