const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./controller/porHacer');

let comando = argv._[0];

switch (comando) {

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('========== LISTA DE TAREAS =========='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('====================================='.geen);
        }
        break;
    case 'actualizar':
        console.log('Actualizar una tarea');
        break;
    default:
        console.log('Comando invalido');
}