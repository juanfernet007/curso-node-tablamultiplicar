const {crearArchivo, crearArchivoSegundaForma} = require('./helpers/multiplicar');
const argv = require('./config/yargsPersonalizado');

console.clear();

//aquí están los argumentos que vienen de la consola process.argv, 
//sin embargo es mejor usar la librería de Yargs
//console.log(process.argv)
console.log(argv);

const base = argv.base;
const listar = argv.l;

crearArchivo(base, listar, argv.hasta)
    .then(mensaje => console.log(mensaje, 'Creado!!'))
    .catch(err => console.log(err));


    
    