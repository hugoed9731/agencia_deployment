// ESTA ES LA SINTAXIS DE COMMUN JS
// const express = require('express'); // importamos express commnunjs
import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';
import dotenv from 'dotenv';
dotenv.config({path:"variables.env"});

const app = express(); // contiene una funcion para ejecutar express

// Conectar la base de datos
db.authenticate()
    .then(() => console.log('Base de datos conectada') )
        .catch(error => console.log(error));

// Definir puerto
// process.env.PORT - esto es lo que va a importar herouku
const port = process.env.PORT || 4000;

// Habilitar PUG - es un template engine
app.set('view engine', 'pug');

// Obtener el año actual, pero vamos a crear nuestro propio Middleware
app.use((req, res, next) => {
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = "Agencia de Viajes";
    // locals son variables internas de express que se pueden mostrar en una vista

    next(); // return next - forzamos a que vaya al siguiente Middleware
});

// AGREGAR BODY PARSER PARA LEER LOS DATOS DEL FORRMULARIO
app.use(express.urlencoded({extended: true}));
// antes se instalaba body parser, pero ya no es necesario

// Definir la carpeta publica - aqui estan la imagenes y el css
app.use(express.static('public'));

// Agregar router
// app.use - soporta get, post, put
app.use('/', router);

// PUERTO Y HOST PARA LA APP
const host = process.env.HOST || '0.0.0.0';
// en caso de que no exista host ponemos 0.0.0.0 para que herokou lo asigne
app.listen(port, host, () => {
    console.log('El servidor esta funcionando')
});

// NUEVA SINTAXIS
// NOTAS: 
// req - es lo que tu enviar
// res - es lo que express te envía
//send - funciona para enviar algo en pantalla
// res.render - se utiliza para mostrar una vista
// next lo que hace es mandarte hacia el siguiente Middleware
