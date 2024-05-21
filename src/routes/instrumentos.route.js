import { Router } from "express";
import {actualizarInstrumento, crearInstrumento, eliminarInstrumento, getInstrumento, getInstrumentos} from "../controllers/instrumentos.controller.js"

const instrumentosRouter = Router();

//Visualizar todos Instrumentos 
instrumentosRouter.get("/", getInstrumentos);

//Visualizar Instrumentos por ID
instrumentosRouter.get("/:id", getInstrumento);

//Creación de un instrumento

instrumentosRouter.post("/", crearInstrumento);

//Actualizar un instrumento por ID

instrumentosRouter.put("/:id",actualizarInstrumento);

//Eliminar un instrumento por ID

instrumentosRouter.delete("/:id", eliminarInstrumento);

export default instrumentosRouter;