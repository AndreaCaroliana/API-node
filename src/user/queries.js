const getUsers = "SELECT *FROM usuario";
const getUserById = "SELECT *FROM usuario WHERE id = $1";
const checkEmail = "SELECT s FROM usuario s WHERE s.email = $1";
const addUsers = "INSET INTO usuario (nick,email,clave, telefono) VALUES (?,?,?,?)" ;
//const getUsers = "SELECT *FROM usuario" ;
//const getUsers = "SELECT *FROM usuario" ;

module.exports = {
    getUsers,
    getUserById,
    addUsers,
    checkEmail
};

