import {Router} from 'express'
import {getAutores, getAutor, postAutor, putAutor, deleteAutor, librosAutor, postAutorLibro} from '../controllers/autores.controllers.js'


export const routerAutor = Router()

routerAutor.get("/autores", getAutores);

routerAutor.get("/autores/:Id", getAutor);

routerAutor.post("/autores", postAutor);

routerAutor.post("/autores/default", postAutorLibro)

routerAutor.put("/autores/:Id", putAutor);

routerAutor.delete("/autores/:Id", deleteAutor);

routerAutor.get("/autores/:Id/books", librosAutor)


