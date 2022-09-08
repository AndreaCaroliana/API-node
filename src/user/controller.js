const pool = require('../db');
const queries = require("./queries");

const getUsers = (req, res) =>{
    pool.query( queries.getUsers , (error,results) =>{
        if(error) throw error;
        res.status(200).json(results.rows);
    })
};

const getUserById = (req, res) =>{
    const id = parseInt (req.params.id);
    pool.query( queries.getUserById ,[id], (error,results) =>{
        if(error) throw error;
        res.status(200).json(results.rows);
    })
};


const addUsers = (req, res) =>{
    const {nick,email,clave, telefono} = req.body;

    pool.query( queries.checkEmail, [email], (error, results) =>{
        if(results.rows.length){
            res.send("Email existe");
        }else{
            pool.query( queries.addUsers,[ nick, email, clave, telefono], (error, results) =>{
                res.status(201).send("Nuevo Usuario");
                console.log("Nuevo Usuario ")
            })
        }

    });
};
const deleteUsers = (req, res) =>{
    const id = parseInt (req.params.id);
    
    pool.query( queries.getUserById, [id], (error, results) =>{
       const noFound = !results.rows.length;
       if(noFound){
            res.send("Usuario no encontrado");
       }
       else{
        pool.query(queries.deleteUsers, [id], (error, results) =>{

            if(error) throw error;
                res.status(200).send("Ususario eliminado");
             
         });
       }
        
    });
};

const updateUsers = (req, res) =>{
    const id = parseInt (req.params.id);
    const { nick } = req.body; 
    
    pool.query( queries.getUserById, [id], (error, results) =>{
        const noFound = !results.rows.length;
        if(noFound){
             res.send("Usuario no encontrado");
        }
        else{
         pool.query(queries.updateUsers, [nick,id], (error, results) =>{
 
             if(error) throw error;
                 res.status(200).send("Ususario actualizado");
              
          });
        }
        
    });
}

module.exports ={
    getUsers,
    getUserById,
    addUsers,
    deleteUsers,
    updateUsers
};