const fs = require('fs');

let listadoPorHacer = [];

const guardarData = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('data/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar la tarea', err);
    })
}

const cargarData = () => {
    try {
        listadoPorHacer = require('../data/data.json');
    } catch {
        listadoPorHacer = [];
    }

}

const getListado = () => {
    cargarData();
    return listadoPorHacer;
}

const crear = (descripcion) => {
    cargarData();
    let porHacer = {
        descripcion: descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarData();
    return porHacer;
}

module.exports = {
    crear,
    getListado
}