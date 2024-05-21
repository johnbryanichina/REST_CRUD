import db from "../config/db.js";

export const getInstrumentos = () =>{
    
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM instrumentos";
       
        db.query(query)
        .then(result=>resolve(result.rows))
        .catch(err=> reject(err))
    });
};

export const getInstrumento = (id) =>{
    
    return new Promise((resolve, reject)=>{
        const query = "SELECT * FROM instrumentos WHERE id_instrumento = $1";
       
        db.query(query,[id])
        .then(result=>resolve(result.rows))
        .catch(err=> reject(err));
    });
};

export const crearInstrumento = (instrumento) =>{
    
    return new Promise((resolve, reject)=>{
       const query = "INSERT INTO instrumentos(nombre,tipo,precio) VALUES ($1,$2,$3)";
       const {nombre, tipo, precio} = instrumento;
        db.query(query,[nombre, tipo, precio])
        .then(result=>resolve(result))
        .catch(err=> reject(err))
    });
};

export const actualizarInstrumento = (instrumentos, id) =>{
    
    return new Promise((resolve, reject)=>{
        const query = 'UPDATE instrumentos SET nombre = $1, tipo = $2, precio = $3 WHERE id_instrumento = $4';
       const {nombre, tipo, precio} = instrumentos;
        db.query(query,[nombre, tipo, precio, id])
        .then(result=>resolve(result))
        .catch(err=> reject(err));
    });
};

export const eliminarInstrumento = (id) =>{
    
    return new Promise((resolve, reject)=>{
        const query = 'DELETE FROM instrumentos WHERE id_instrumento = $1';
       
        db.query(query,[id])
        .then(result=>resolve(result))
        .catch(err=> reject(err));
    });
};