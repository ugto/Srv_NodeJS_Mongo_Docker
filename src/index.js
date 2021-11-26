const express = require('express');

//Inicializaciones
const app = express();
require('./database');

// Settings
app.listen(3000);

//Routes
app.use(require('./routes/index'));

//Incio de servidor 
console.log('SERVIDOR EN PUERTO',3000);