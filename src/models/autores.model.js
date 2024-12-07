import {DataTypes} from 'sequelize'
import {sequelize} from '../database/database.js'
import {LIBROS} from './books.model.js'

export const autor = sequelize.define('AUTORES', {
    Id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    edad: {
        type: DataTypes.INTEGER
    }
}, {
    tableName: 'AUTORES',
    timestamps: false
})

autor.hasMany(LIBROS, {
    foreignKey: 'IdAutor',
    sourceKey: 'Id'
})

LIBROS.belongsTo(autor, {
    foreignKey: 'IdAutor',
    targetKey: 'Id'
})