import express from 'express' // Importe express
import employeesRoutes from './routes/employees.routes.js' //Importe las rutas
import indexRoutes from './routes/index.routes.js'

const app = express() // Inicio la aplicacions

// Creacion de los EndPoints

app.use(indexRoutes) //Hago uso de la ruta db
app.use(employeesRoutes) //Hago uso de las rutas

app.listen(3000) // Establezco el puerto de escucha
console.log('Server running on port 3000') // Mensaje por console de la aplicacion