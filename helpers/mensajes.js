const { read } = require('fs');

require('colors');

const mostrarMenu = () => {

    return new Promise(resolve => {
        // Inicio
        console.clear();
        console.log('==========================='.green);
        console.log('  Seleccione una opcion  '.blue);
        console.log('===========================\n'.green);

        // Menu
        console.log(`${ '1.'.green } ${ 'Crear Tarea'.blue }`);
        console.log(`${ '2.'.green } ${ 'Listar Tarea'.blue }`);
        console.log(`${ '3.'.green } ${ 'Listar Tareas Completadas'.blue }`);
        console.log(`${ '4.'.green } ${ 'Listar Tareas Pendientes'.blue }`);
        console.log(`${ '5.'.green } ${ 'Completar Tareas'.blue }`);
        console.log(`${ '6.'.green } ${ 'Borrar Tareas'.blue }`);
        console.log(`${ '0.'.green } ${ 'Salir'.blue } \n`);

        // Entrada de Datos
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
    
        readline.question('Seleccione una opcion: ', (opt) => {
            readline.close();
            resolve(opt);
        })
    })
}
const pause = () => {

    return new Promise ( resolve => {

        // Entrada de Datos
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })

        readline.question(`\nPresione ${ 'ENTER'.america } para continuar\n`, (opt) => {
            readline.close();
            resolve();
        })
    })

}


module.exports = {
    mostrarMenu,
    pause
}


