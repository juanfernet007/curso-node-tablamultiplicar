const fs = require('node:fs');
const colors = require('colors');

const crearArchivo = async (base, listar, hasta) => {
    
    try {
        let escritura = '';
        if(listar){
            escritura+= colors.green('=====================\n');
            escritura+= `Tabla del ${base} hasta ${hasta}\n`; 
            escritura+= colors.green('=====================\n');
        }
            
        
        for(let i = 1; i <= hasta; i++) {
            escritura += `${i} ${'X'.yellow} ${base} ${'='.yellow} ${i * base}\n`;
        }

        if(listar)
            console.log(escritura);


        const nombreArchivoEnTxt = `./salidas/tabla del ${base}.txt`;
        
        fs.writeFileSync(nombreArchivoEnTxt, escritura);    
        
        return nombreArchivoEnTxt;

    } catch (error) {
        throw error;
    }
}

const crearArchivoSegundaForma = (base = 5) => {
    return  new Promise( (resolve, reject) => {
        try {
            let escribir = `Tabla del ${base}\n\n`; 
        
            for(let i = 1; i <= 10; i++) {
                escribir += `${i} X ${base} = ${i * base}\n`;
            }
    
            console.log(escribir);

            let nombreArchivoEnTxt = `tabla del ${base}.txt`;            
            fs.writeFileSync(nombreArchivoEnTxt, escribir);                
            resolve(nombreArchivoEnTxt);
    
        } catch (error) {
            throw reject(error);
        }


    })
    
}

module.exports = {
    crearArchivo,
    crearArchivoSegundaForma
}

