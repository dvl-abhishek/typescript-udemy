
import  express , {Request ,Response ,  NextFunction}  from 'express';
import todosRouter from './routes/todo'

let app = express();

app.use('/todos',todosRouter);
app.use((err:Error,req:Request,res:Response,nextFun:NextFunction)=>{
  res.status(500).json({message:err.message})
})

app.listen(3000);