const  {Router} = require('express');
const controllers = require('./controller');

const router = Router();

router.get('/user', controllers.getUsers);
router.post('/user/', controllers.addUsers);
router.get('/user/:id', controllers.getUserById);
router.put('/user/:id', controllers.updateUsers);
router.delete('/user/:id', controllers.deleteUsers);


module.exports = router;