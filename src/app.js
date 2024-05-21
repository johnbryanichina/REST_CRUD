import express from "express";
import pool from "../src/config/db.js";
import indexRouter from "./routes/index.route.js";

const app = express();

app.set("port", process.env.PORT || 4000);

//Middleware
app.use(express.json());
//ROUTES
//Ruta raiz
app.use("/", indexRouter);

//Ruta que no están establecidas
app.use("*",(req,res)=>{
    res.send("404 - not found")
})

//INICIA EL SERVIDOR

app.listen(app.get("port"), ()=>{
    console.log("Server is running on port ", app.get("port"));
});

//CONECTA A LA BASE DE DATOS
pool.connect(error => {
  if (error) {
    console.error('Error al conectar a la base de datos PostgreSQL:', error);
    return;
  }
  console.log('Conectado a la base de datos PostgreSQL');
});
  
 
