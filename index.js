const bodyParser=require('body-parser');
const morgan=require('morgan');
const express= require('express');
const app = express();
//Routes
const pokemon=require('./routes/pokemon');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.get("/", (req, res, next)=>{
    return res.status(200).send("Bienvenidos al Pokedex");
});
app.use("/pokemon",pokemon);
app.listen(process.env.PORT || 3000,()=>{
    console.log("Sever is runing...");
});