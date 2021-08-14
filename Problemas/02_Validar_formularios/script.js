const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const materia = document.querySelector('#materia');
const btn_enviar = document.querySelector('#btn_enviar');
const resultado = document.querySelector('.resultado');

const validarCampos = () => {
    let error = [];
    if (nombre.value.length <= 0) {
        error.push(true);
        error.push('Por favor ingrese un nombre');
        return error;
    } else if (nombre.value.length > 20) {
        error.push(true);
        error.push('El nombre debe tener menos de 20 caracteres');
        return error;
    } else if (email.value.length <= 0 || 
                email.value.indexOf('@') == -1 || 
                email.value.indexOf('.') == -1){

        error.push(true);
        error.push('Por favor ingrese un email válido');
        return error;
    } else if (materia.value.length <= 0) {
        error.push(true);
        error.push('Por favor ingrese la materia');
        return error;
    }
    error[0] = false;
    return error;
}

btn_enviar.addEventListener('click', function (e) {
    e.preventDefault(); // Previene actualizar la página
    let error = validarCampos();

    if (error[0]) {
        resultado.innerHTML = error[1];
        resultado.classList.add('red');
    } else {
        resultado.classList.remove('red');
        resultado.classList.add('green');
        resultado.innerHTML = 'Gracias por enviar su información!!!';
    }
});