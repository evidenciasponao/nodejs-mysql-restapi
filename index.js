import express from 'express' // Importe express
import {pool} from './db.js' // Importa el objeto de la base de datos

const app = express() // Inicio la aplicacions

// Creacion de los EndPoints

app.get('/ping', async (req, res) => {
    const [result] = await pool.query('SELECT "pong" AS result')
    res.json(result[0])
});

app.get('/employees', (req, res) => res.send('obteniendo empleados'))

app.post('/employees', (req, res) => res.send('creando empleados'))

app.put('/employees', (req, res) => res.send('actualizando empleados'))

app.delete('/employees', (req, res) => res.send('eliminando empleados'))

app.listen(3000) // Establezco el puerto de escucha
console.log('Server running on port 3000') // Mensaje por console de la aplicacion