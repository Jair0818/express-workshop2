const morgan=require('morgan');
const express= require('express');
const app = express();
//Routes
const pokemon=require('./routes/pokemon');
const user=require('./routes/user');
const auth=require('./middleware/auth');
const notFoud=require('./middleware/notFoud');
const index=require('./middleware/index');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.get("/",index);
app.use("/user",user);
app.use(auth);
app.use("/pokemon",pokemon);
app.use(notFoud);
app.use((req,res,next)=>{
    return res.status(404).json({code:404,message:"URL no encontrada"});
});
app.listen(process.env.PORT || 3000,()=>{
    console.log("Sever is runing...");
});