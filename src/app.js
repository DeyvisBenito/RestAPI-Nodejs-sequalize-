import express from 'express'
import {config} from 'dotenv'
import {sequelize} from './database/database.js'
import {routerBook} from './routes/books.routes.js'
import {routerAutor} from './routes/autores.routes.js'
//import './models/books.model.js'
//import './models/autores.model.js'


config()
const app = express()

//Middlewares
app.use(express.json()); //podra leer datos json

app.use(routerBook)
app.use(routerAutor)


const PORT = process.env.PORT || 3000



const main = async () => {
    app.listen(PORT, () => console.log(`Escuchando en puerto ${PORT}`))

    try{
        await sequelize.sync({force: false})

    }catch(error){
        console.log(error)
    }
}

main()
