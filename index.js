const express = require('express');

const { conexion } = require('./conections/sqlConection');
const { crearProductos,verProductos } = require('./querys/query.productos')

const app = express();

conexion();

app.post('/crearProducto', async function (req, res) {
    
    const {categoriaproductos_idCategoriaproductos, usuarios_idusuarios, nombre, marca, codigo, stock, estados_idestados, precio, fecha_creacion, foto} = req.body;
    if(!nombre || !categoriaproductos_idCategoriaproductos || !usuarios_idusuarios || !marca || !codigo || !stock || !estados_idestados|| !precio || !fecha_creacion){
        return res.status(400).json({
            succes: false,
            message: 'Debe inmgresar todos los campos'
        }
        );
    }

    try {
        const result = await crearProductos>(categoriaproductos_idCategoriaproductos, usuarios_idusuarios, nombre, marca, codigo, stock, estados_idestados, precio, fecha_creacion, foto);
        if(result.succes){
            return res.status(201).json(result);
        }else{
            return res.status(500).json(result);
        }
    } catch (error) {
        console.log('error en la ruta /crearPorducto', error);
        return res.status(500).json({
            succes: false,
            message: 'error interno del servidor',
            error: error.message
        })
    }
})

app.get('/productos', async function (req, res) {
    try {
        const productos = await verProductos();
        res.json(productos);
    } catch (error) {
        res.status(500, error.message)
    }
    
}) 

app.listen(3000);
console.log(`corriendo en puerto ${3000}`);

