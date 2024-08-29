const { sequelize } = require('../conections/sqlConection');

async function crearProductos() {
    try {
        const nuevoProducto = [];
        nuevoProducto = await sequelize.query('CALL agregarProducto(categoriaproductos_idCategoriaproductos, usuarios_idusuarios, nombre, marca, codigo, stock, estados_idestados, precio, fecha_creacion, foto)',{
            replecements: {categoriaproductos_idCategoriaproductos, usuarios_idusuarios, nombre, marca, codigo, stock, estados_idestados, precio, fecha_creacion, foto}
        });
        return {
            succes: true,
            message: 'producto creado exitosamente',
            nuevoProducto: nuevoProducto
        }
    } catch (error) {
        console.log('no se puedo agregar el producto', error);
        return {
            succes: false,
            message: 'no se puedo agregar el producto',
            error: error.message
        }
        
    }
}

async function verProductos(){
    try {
        const productos = await sequelize.query(
            'SELECT * FROM productos',
            {
                type: sequelize.QueryTypes.SELECT
            }
        );
        return productos;
    } catch (error) {
        console.log('error al encontrar los productos:', error);
        throw error;
    }
}

verProductos();

module.exports = {
    verProductos,
    crearProductos
}