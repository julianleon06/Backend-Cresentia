const express = require('express');
const cors = require('cors')

// const {dbConection} = require( './config/mongo.config' ) // Importamos la configuracion de mongoose 
const PORT = process.env.PORT || 3000;
const app = express();

app.use( express.json() );
app.use(cors())


// dbConection(); // invoca la configuracion 
app.listen( PORT, function (){
    console.log(`Servidor corriendo en el puerto ${PORT}` );
})