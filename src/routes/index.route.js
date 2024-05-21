import { Router } from "express";
import instrumentosRouter from "./instrumentos.route.js";

const indexRouter = Router();

const prefijo = "/api";
//Ruta de inicio
indexRouter.get(prefijo,(req,res)=>{
    res.send("Bienvenido :)");
});

indexRouter.use(`${prefijo}/instrumentos`,instrumentosRouter);
export default indexRouter;