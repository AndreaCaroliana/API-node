const express = require('express');
const user = require('./user/router');
const app = express();
const  PORT = 3000;

app.use(express.json());


app.get("/", (req, res) =>{
    res.send('Hello word');
});

app.use('/api', user);

app.listen(PORT, () => console.log(`Encuchando en el puerto: ${PORT}`));
