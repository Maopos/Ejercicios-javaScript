const objeto = {
    propiedad_1 : "valor_1",
    propiedad_2 : "valor_2",
    propiedad_3 : "valor_3"
};

const obtenerInformacion = () => {
    setTimeout(() => {return objeto}, 1000)};

console.log("Respuesta Sincronica: " + obtenerInformacion());
console.log();


//----------------------------------------------------------------

const obtenerInformacion_2 = () =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(objeto);
        }, 1500);
    }); 
}

obtenerInformacion_2().then(resultado => console.log("Respuesta Asincronica " + resultado.propiedad_1));


//----------------------------------------------------------------


const mostrarDatos = async () =>{
    resultado = await obtenerInformacion_2();
    console.log('Respuesta Asincrona Await & Async: ');
    
    console.log(resultado);  
}

mostrarDatos();
