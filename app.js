require('colors');

const { guardarDB,leerDB } = require('./helpers/guardarArchivo');

const { inquirerMenu,
        pause,
        leerInput } = require( './helpers/inquirer');

const Tareas = require('./models/tareas');

const main = async() => {

    let opt  = '';
    // Intancia de las Tareas
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if( tareasDB ){
        // Establecer las tareas

    }
    
    await pause();

    do {

        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                // Crear opcion
                const desc = await leerInput('Descripción: ');
                tareas.crearTarea(desc);
            break;

            case '2':
                console.log( tareas.listadoArr);
            break;
        }

        // Bases de Datos
        guardarDB( tareas.listadoArr);

        // Pausa
        await pause();
        
    } while ( opt !== '0');

}


main();