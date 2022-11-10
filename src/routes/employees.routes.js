import { Router } from "express"; //Importamos router para organizar todas las rutas de la app
import { getEmployees, createEmployee, updateEmployee, deleteEmployee, getEmployee } from '../controllers/employees.controller.js' //Importo getEmployees

const router = Router() //Inicializo el router

router.get('/employees', getEmployees)

router.get('/employees/:id', getEmployee)


router.post('/employees', createEmployee)

router.put('/employees', updateEmployee)

router.delete('/employees/:id', deleteEmployee)


export default router // Exporto el router