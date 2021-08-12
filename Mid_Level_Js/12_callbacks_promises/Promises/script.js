let nombre = 'Pedro1';


const promesa = new Promise((resolve, reject) => {

    if (nombre != 'Pedro') {
        reject('Error: El nombre no es Pedro');
    } else {
        resolve('Hola, ' + nombre);
    }

});

promesa.then((resultado) => {
    console.log(resultado);
}).catch((error) => {
    console.log(error);
});

