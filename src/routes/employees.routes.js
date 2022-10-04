import { Router } from "express"; //Importamos router para organizar todas las rutas de la app

const router = Router() //Inicializo el router

router.get('/employees', (req, res) => res.send('obteniendo empleados'))

router.post('/employees', (req, res) => res.send('creando empleados'))

router.put('/employees', (req, res) => res.send('actualizando empleados'))

router.delete('/employees', (req, res) => res.send('eliminando empleados'))


export default router // Exporto el router