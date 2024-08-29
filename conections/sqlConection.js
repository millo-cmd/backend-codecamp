const Sequelize  = require('sequelize');

const sequelize = new Sequelize( 'CODECAMP', 'sa', '12345', {
    host: 'localhost',
    dialect: 'mssql',
    dialectOptions: {
        options: {
            encrypt: false,
        },
    },

    logging: false,
});

async function conexion(){
    try {
        await sequelize.authenticate();
        console.log('conexion exitosa');
      } catch (error) {
        console.error('no se pudo establecer la conexion error:', error);
      }    
}

module.exports = {
    conexion,
    sequelize
};

