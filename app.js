require('colors');

const { inquerirMenu,pause } = require( './helpers/inquirer');
const Tareas = require('./models/tareas');

const main = async() => {

    let opt  = '';
    const tareas = new Tareas();


    do {

        opt = await inquerirMenu();

        switch (opt) {
            case 1:
                // Crear opcion
            break;

            case 2:
                console.log( tareas._listado);
            break;
        }



        // Pausa
        await pause();
        
    } while ( opt !== '0');

}


main();