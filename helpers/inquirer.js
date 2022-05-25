
const { blue } = require('colors');
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
                name: `${'1.'.blue} ${'Crear Tarea'.white}`
            },
            {
                value: '2',
                name: `${'2.'.blue} ${'Listar Tarea'.white}`
            },
            {
                value: '3',
                name:  `${'3.'.blue} ${'Listar Tareas Completadas'.white}`
            },
            {
                value: '4',
                name:  `${'4.'.blue} ${'Listar Tareas Pendientes'.white}`
            },
            {
                value: '5',
                name: `${'5.'.blue} ${'Completar Tareas'.white}`
            },
            {
                value: '6',
                name:  `${'6.'.blue} ${'Borrar Tareas'.white}`
            },
            {
                value: '0',
                name: `${'0.'.blue} ${'Salir'.white}`
            },
        ]
    }
];


const inquirerMenu = async() => {

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

    const leerInput = async( message ) => {
        
        const question = [
            {
                type: 'input',
                name: 'desc',
                message,
                validate( value ){
                    if(value.length === 0){
                        return 'Por favor ingrese un valor';
                    }
                    return true;
                }
            }
        ];

        const { desc } = await inquirer.prompt(question);
        return desc;
    }

module.exports = {
    inquirerMenu,
    pause,
    leerInput
}