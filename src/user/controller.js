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

    pool.query( queries.checkEmail, [id], (error, results) =>{
        if(results.rows.length){
            res.send("Usuarioo existe");
            pool.query( queries.deleteUsers,[id], (error, results) =>{
                res.status(201).send("Eliminar Usuario");
                console.log("Eliminar Usuario")
            })
        }
        
    });
};

module.exports ={
    getUsers,
    getUserById,
    addUsers,
    deleteUsers
};