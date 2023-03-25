const { response } = require("express");
const { Datasen } = require('../models')

//Obtener Salas -paginado -total- populate
const crearDatos = async (req, res = response) => {

    const valor = req.body;
    console.log(valor);
    const newData = new Datasen(valor);
    await newData.save();
    res.json(newData);
} 

module.exports = {
    crearDatos,
}