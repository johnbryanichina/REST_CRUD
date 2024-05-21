import * as instrumentosServices from "../services/instrumentos.services.js"
//Obtener todos los instrumentos musicales
export  const getInstrumentos = (req, res) =>{
   instrumentosServices.getInstrumentos()
   .then(result =>{
    res.status(200).json({
        message:"Los instrumentos se han recuperado satisfactoriamente",
        data: result,
    });
   })
   .catch(err=>{
        console.error('Error fetching instrumentos:', err);
        res.status(500).json({ error: 'Error en el servidor' });
   });
};
 
export  const getInstrumento = (req, res) =>{
    const {id} = req.params;
    instrumentosServices.getInstrumento(id)
    .then(result =>{
        if(result.length === 0){
            return res.status(404).json({
                message:"El instrumento no fue encontrado",
                data:null,
            })
        }

     res.status(200).json({
         message:"El insturmento se ha recuperado satisfactoriamente",
         data: result[0],
     });
    })
    .catch(err=>{
        console.error('Error fetching instrumentos:', err);
        res.status(500).json({ error: 'Error en el servidor' });
    })
};

export  const crearInstrumento = (req, res) =>{
    const instrumento = req.body;
    instrumentosServices.crearInstrumento(instrumento)
    .then(()=>{
     res.status(200).json({
         message:"El insturmento se ha creado satisfactoriamente",
         data: instrumento,
     });
    })
    .catch(err=>{
        console.error('Error fetching instrumentos:', err);
        res.status(500).json({ error: 'Error en el servidor' });
    })
};

export  const actualizarInstrumento = (req, res) =>{
    const instrumento = req.body;
    const {id} = req.params;
    instrumentosServices.actualizarInstrumento(instrumento, id)
    .then(()=>{
     res.status(200).json({
         message:"El instrumento se ha actualizado satisfactoriamente",
         data: instrumento,
     });
    })
    .catch(err=>{
        console.error('Error ferching instrumentos:',err);
        res.status(500).json({error:'Error en el servidor'});
    })
};

export  const eliminarInstrumento = (req, res) =>{
    const {id} = req.params;
    instrumentosServices.eliminarInstrumento(id)
    .then(()=>{
     res.status(200).json({
         message:"El instrumento se ha eliminado satisfactoriamente"
     });
    })
    .catch(err=>{
        console.error('Error ferching instrumentos:',err);
        res.status(500).json({error:'Error en el servidor'});
    })
};