const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'Crear una nueva tarea por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualizar el estado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Elimina una tarea especifica', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}