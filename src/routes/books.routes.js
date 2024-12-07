import {Router} from 'express'
import {createBooks, getBooks, deleteBook, updateBook} from '../controllers/books.controller.js'


export const routerBook = Router();

routerBook.get("/books", getBooks);


routerBook.post("/books", createBooks);


routerBook.put("/books/:Id", updateBook);


routerBook.delete("/books/:Id", deleteBook);


routerBook.get("/books/:Id");


