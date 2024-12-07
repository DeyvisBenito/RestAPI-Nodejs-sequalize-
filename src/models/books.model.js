import { sequelize } from '../database/database.js';
import { DataTypes } from 'sequelize'

export const LIBROS = sequelize.define('LIBROS', {
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING
    },
    fecha_lanzamiento: {
        type: DataTypes.DATEONLY
    },
    IdAutor:{
        type: DataTypes.INTEGER
    }
}, {
    tableName: 'LIBROS',  // Asegura que mapeas la tabla existente
    timestamps: false
});

//Autor.hasMany(LIBROS, { //el muchos de foreign key
  //  foreignKey: 'autorId',
    //sourceKey: 'Id'
//})

//LIBROS.belongsTo(Autor,{ //el uno de foreign key
  //  foreignKey:'librosId',
    //targetKey: 'Id'(targetId)
//})