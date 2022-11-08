const { demandOption } = require('yargs');

const argv = require('yargs')
                .option('b', {
                    alias : 'base',
                    demandOption : true,                    
                    describe : 'Base para multiplicar',
                    type: 'number'   
                })
                .option('l', {
                    alias: 'listar',
                    demandOption: false,
                    describe : 'Listar en consola',
                    type : 'boolean'
                })
                .option('h',{
                    alias: 'hasta',
                    demandOption: true,
                    describe : 'Hasta donde multiplicamos',
                    type: 'number'
                })
                .check(( argv, options) => {
                    
                    let errores = '';
                    
                    if ( isNaN( argv.b ) || isNaN(argv.h) )                     
                        errores+= 'El argumento -b y el -h deben ser números respectivamente para continuar. ';
                    if(argv.h < 1)    
                        errores+= 'El argumento -h debe ser mayor o igual a 1 para continuar. ';
                    
                    if(errores.length == 0)    
                        return true;
                    else
                        throw new Exception(errores);
                })
                .argv;

module.exports = argv;