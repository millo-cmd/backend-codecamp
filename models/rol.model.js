const {  DataTypes } = require('sequelize');
const { sequelize } = require('../conections/sqlConection');

const rol = sequelize.define( 'rol', {
    idRol: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING
    }
},{
    tableName: 'rol',
    timestamps: false
});



async function verRol(){
    try {
        const roles = await rol.findAll();
        console.log(roles);
      } catch (error) {
        console.error('Error al obtener los roles:', error);
      }
 
}

module.exports = {
    verRol
}