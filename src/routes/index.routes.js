import { Router } from "express"; 
import {pool} from '../db.js' // Importa el objeto de la base de datos

const router = Router()

router.get('/ping', async (req, res) => {
    const [result] = await pool.query('SELECT "pong" AS result') //Query a la db
    res.json(result[0])
});

export default router