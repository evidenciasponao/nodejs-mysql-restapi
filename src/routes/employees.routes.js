import { Router } from "express"; //Importamos router para organizar todas las rutas de la app
import { getEmployees, createEmployee, updateEmployee, deleteEmployee } from '../controllers/employees.controller.js' //Importo getEmployees

const router = Router() //Inicializo el router

router.get('/employees', getEmployees)

router.post('/employees', createEmployee)

router.put('/employees', updateEmployee)

router.delete('/employees', deleteEmployee)


export default router // Exporto el router