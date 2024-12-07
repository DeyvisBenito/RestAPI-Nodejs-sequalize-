import {LIBROS} from '../models/books.model.js'

export const getBooks = async (req, res) =>{
    try{
        const libros = await LIBROS.findAll()

        res.json(libros);
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}

export const createBooks = async (req, res) => {
    try{
        const {nombre, fecha_lanzamiento, IdAutor=1} = req.body;
        const newBook= await LIBROS.create({
            nombre,
            fecha_lanzamiento,
            IdAutor
        });

        res.json(newBook);

    }catch(error){
        return res.status(500).json({message: error.message})
    }
    
}


export const updateBook = async (req, res) => {
    try{
        const {Id} = req.params
        const {nombre, fecha_lanzamiento, IdAutor=1} = req.body

        const book = await LIBROS.findByPk(Id);

        book.nombre = nombre;
        book.fecha_lanzamiento= fecha_lanzamiento;
        book.IdAutor= IdAutor;

        await book.save();

        res.json(book)

    }catch (error){
        return res.status(500).json({message: error.message});
    }
}

export const deleteBook = async (req, res) => {
    try{
        const {Id} = req.params

        await LIBROS.destroy({
            where:{
                Id
            }
        });

        res.sendStatus(204);
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}