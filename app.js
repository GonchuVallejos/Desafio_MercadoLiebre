const express = require('express');
const path = require('node:path');

const app = express();

// ROUTES
app.get ('/', ( req, res ) => {
    const pathHome = path.join(__dirname, "views/home.html")
    res.sendFile(pathHome);
})

// Public (Static) Listen Server
app.use(express.static('public')); //Para que la carpeta Public quede estática y no haga falta poner la ruta absoluta todo el tiempo

app.listen(3000, () => console.log(`Server up on port: http://localhost:3000`));