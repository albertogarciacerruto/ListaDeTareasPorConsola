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
        console.log('========== LISTA DE TAREAS =========='.green);
        for (let tarea of listado) {

            console.log('Tarea: ', tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('====================================='.green);
        }

        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        break;
    case 'borrar':
        let borrado = porHacer.deleteData(argv.descripcion);
        break;
    default:
        console.log('Comando invalido');
}