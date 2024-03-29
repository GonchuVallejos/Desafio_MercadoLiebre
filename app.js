const express = require('express');
const path = require('node:path');

const app = express();

// ROUTES
app.get ('/', ( req, res ) => {
    const pathHome = path.join(__dirname, "views/home.html")
    res.sendFile(pathHome);
})

app.get ('/register', ( req, res ) => {
    const pathHome = path.join(__dirname, "views/register.html")
    res.sendFile(pathHome);
})

app.get ('/login', ( req, res ) => {
    const pathHome = path.join(__dirname, "views/login.html")
    res.sendFile(pathHome);
})

app.post ('/register', ( req, res ) => {
    const pathHome = path.join(__dirname, "views/home.html")
    res.sendFile(pathHome);
})

app.post ('/session', ( req, res ) => {
    const pathHome = path.join(__dirname, "views/home.html")
    res.sendFile(pathHome);
})

// Public (Static) Listen Server
app.use(express.static('public')); //Para que la carpeta Public quede estática y no haga falta poner la ruta absoluta todo el tiempo

/*
PARA CUANDO SE EJECUTA DE FORMA LOCAL, DONDE NOSOTROS MANEJAMOS EL PUERTO
app.listen(3000, () => console.log(`Server up on port: http://localhost:3000`));

AGREGAR PARA VARIABLES DE ENTORNO*/
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server up on port: http://localhost:${PORT}`))