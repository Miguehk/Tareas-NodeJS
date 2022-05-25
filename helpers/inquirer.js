
const inquirer = require('inquirer');
require('colors');

// Documentacion de requirer
const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Que desea hacer?',
        choices: [
            {
                value: '1',
                name: '1. Crear Tarea'
            },
            {
                value: '2',
                name: '2. Listar Tarea'
            },
            {
                value: '3',
                name: '3. Listar Tareas Completadas'
            },
            {
                value: '4',
                name: '4. Listar Tareas Pendientes'
            },
            {
                value: '5',
                name: '1. Completar Tareas'
            },
            {
                value: '6',
                name: '6. Borrar Tareas'
            },
            {
                value: '0',
                name: '0. Salir'
            },
        ]
    }
];


const inquerirMenu = async() => {

    // Inicio
    // console.clear();
    console.log('==========================='.green);
    console.log('  Seleccione una opcion  '.blue);
    console.log('===========================\n'.green);

    const { opcion } =  await inquirer.prompt(preguntas);

    return opcion;

}

    //Pause
    const pause = async() => {

        const question = [
            {
                type: 'input',
                name: 'enter',
                message: `Presiones ${ 'enter'.green} para continuar`
            }
        ];

        console.log('\n');
        await inquirer.prompt(question);

    }

    const leerInput = async( mensaje ) => {
        
        const question = [
            {
                type: 'input',
                name: 'desc'
            }
        ]
    }


module.exports = {
    inquerirMenu,
    pause
}