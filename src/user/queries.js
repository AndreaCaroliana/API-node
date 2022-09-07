const getUsers = "SELECT *FROM usuario";
const getUserById = "SELECT *FROM usuario WHERE id = $1";
const checkEmail = "SELECT s FROM usuario s WHERE s.email = $1";
const addUsers = "INSERT INTO usuario (nick,email,clave, telefono) VALUES ($1,$2,$3,$4)" ;
const deleteUsers = "DELETE *FROM usuario WHERE id = $1" ;
//const getUsers = "SELECT *FROM usuario" ;

module.exports = {
    getUsers,
    getUserById,
    addUsers,
    checkEmail,
    deleteUsers
};

