const senButton = document.getElementById("enviar_nota");
const nota = document.getElementById("nota_alumno");
const aprobacion = document.querySelector('.aprobacion');
const mensaje = document.querySelector('.mensaje');
const divNotas = document.querySelector('.notas');

let notas = [];


const abrirModal = (res, msj) => {
    
    mensaje.innerHTML = `<h2>${res} ${msj}</h2>`;   
}

const verificarPromedio = (resultado) => {

    if (resultado < 6) {
        resultado = 0;
    } else if (resultado >= 6 && resultado <= 10){
        resultado = 1;
    } else {
        resultado = 2;
    }

    switch (resultado) {
        case 0:
            aprobacion.innerHTML = `<h2>Notas: ${notas} <br><br>¡No has aprobado!</h2>`;
            break;
        case 1:
            aprobacion.innerHTML = `<h2>Notas: ${notas} <br><br>¡Has aprobado!</h2>`;
            break;
        default:
            aprobacion.innerHTML = `<h2>La nota debe ser menor a 10.</h2>`;
            break;
    }
}

senButton.addEventListener("click", function () {

    let resultado, mensaje;

    try {
        resultado = parseInt(nota.value);
        if (isNaN(resultado)) {
            throw "Mucho tooonto!!";
        } else if (resultado > 10){
            aprobacion.innerHTML = `<h2>La nota debe ser menor a 10.</h2>`;
            throw "¡Mucho tooonto!!<br>";
        }
        mensaje = 'Nota Guardada...';

        

    } catch (error) {
        resultado = error;
        mensaje = "Error: El valor debe ser un número";
    }
    if (nota.value <= 10) {
        notas.push(nota.value);   
    }
    nota.value = "";
    abrirModal(resultado, mensaje);
    
    var promedio = 0;
    for (let index = 0; index < notas.length; index++) {

        if (notas[index] <= 10) {
            promedio += parseInt(notas[index]);
        }
        
        divNotas.innerHTML = `<h2>Promedio: ${promedio/notas.length}</h2>`;
    }
    verificarPromedio(promedio/notas.length);
});