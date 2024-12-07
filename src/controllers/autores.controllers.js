import {autor} from '../models/autores.model.js'
import {LIBROS} from '../models/books.model.js'
import {sequelize} from '../database/database.js'

export const getAutores = async (req, res) =>{
    try{
        const autores = await autor.findAll();

        res.json(autores)
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}

export const getAutor = async (req, res) =>{
    try{
        const {Id} = req.params
        const getAutor = await autor.findByPk(Id);

        if(!getAutor) return res.status(404).send('Autor not found')
        res.json(getAutor)

    }catch(error){
        return res.status(500).json({message: error.message})
    }
}

export const postAutor = async (req, res) =>{
    try{
        const {nombre, edad} = req.body
        const newAutor = await autor.create({
            nombre,
            edad
        })

        res.json(newAutor)
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}

export const putAutor = async (req, res) =>{
    try{
        const {Id} = req.params;

        const actualizarAutor = await autor.findOne({
            where: {
                Id
            }
        })
        
        if(!actualizarAutor) return res.send("Autor no encontrado")

        actualizarAutor.set(req.body);
        console.log(actualizarAutor)
        await actualizarAutor.save()

        res.json(actualizarAutor);

    }catch(error){
        return res.status(500).json({message: error.message})
    }
}

export const deleteAutor = async (req, res) =>{
    try{
        const {Id} = req.params

        const searchA = await autor.findByPk(Id)

        if(!searchA) return res.status(404).send('Autor not found')
        
        await autor.destroy({
            where:{
                Id
            }
        })

        res.sendStatus(204)

    }catch(error){
        return res.status(500).json({message: error.message})
    }
}

export const librosAutor= async(req, res) =>{
    try{
        const {Id} = req.params

        const libros = await LIBROS.findAll({
            where:{
                IdAutor: Id
            }
        })

        res.json(libros)

    }catch(error){
        return res.status(500).json({message: error.message})
    }
}

export const postAutorLibro= async(req, res) => {
    try{
        const {nombreAutor, edad, nombreLibro, fecha_lanzamiento} = req.body

        if (!nombreAutor || !edad || !nombreLibro || !fecha_lanzamiento) {
            return res.status(400).send('Faltan parámetros requeridos.');
        }

        const result = await sequelize.query(
            'EXEC SP_INSERTAR_AUTOR_LIBRO @nombreAutor = :nombreAutor, @edad = :edad, @nombreLibro = :nombreLibro, @fecha_lanzamiento = :fecha_lanzamiento',
            {
                replacements: req.body
            }
        );

        res.send('Operacion exitosa')

    }catch(error){
        return res.status(500).json({message: error.message})
    }
}