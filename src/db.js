import {createPool} from 'mysql2/promise' //Importamos createpool para crear un conjunto de coneciones

//Parametros para la base de datos
export const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'companydb'
})