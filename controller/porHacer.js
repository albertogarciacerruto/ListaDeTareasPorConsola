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

const actualizar = (descripcion, completado = true) => {
    cargarData();
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarData();
        console.log('Elemento actualizado correctamente');
        return true;
    } else {
        console.log('El elemnto seleccionado no se ha podido actualizar');
        return false;
    }
}

const deleteData = (descripcion) => {
    cargarData();
    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion;
    });

    if (listadoPorHacer.length === nuevoListado.length) {
        console.log('El elemnto seleccionado no se ha podido eliminar');
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarData();
        console.log('Elemento eliminado correctamente');
        return true;
    }
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
    getListado,
    actualizar,
    deleteData
}