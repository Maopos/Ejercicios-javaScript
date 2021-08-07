let alumnos = [{
        nombre: "Mauricio Posada",
        email: "maopos@icloud.com",
        materia: "Matemáticas"
    },{
        nombre: "Karin Guerra",
        email: "karinguerra@icloud.com",
        materia: "Matemáticas"
    },{
        nombre: "Facundo Cabral",
        email: "facabral@icloud.com",
        materia: "Matemáticas"
    },{
        nombre: "Silvio Rodriguez",
        email: "silviorod@icloud.com",
        materia: "Matemáticas"
    },{
        nombre: "Amanda Montero",
        email: "amanmon@icloud.com",
        materia: "Matemáticas"
    },{
        nombre: "Angelines Fernandez",
        email: "angelinf@icloud.com",
        materia: "Matemáticas"
}];

const boton = document.querySelector('.confirmar');
const contenedor = document.querySelector('.grid_container');

let htmlCode = '';

for (i in alumnos) {
    
    let nombre = alumnos[i].nombre;
    let email = alumnos[i].email;
    let materia = alumnos[i].materia;
    htmlCode += `
    <div class="grid_item nombre">${nombre}</div>
    <div class="grid_item email">${email}</div>
    <div class="grid_item materia">${materia}</div>

    <div class="grid_item semana">
        <select name="" id="" class="semana_elegida">
            <option value="Semana 1">Semana 1</option>
            <option value="Semana 2">Semana 2</option>
        </select>
    </div>
    `;
    
}
contenedor.innerHTML = htmlCode;   



boton.addEventListener('click', () => {
    
    let confirmar = confirm('Deseas confirmar los datos?');
    if (confirmar) {
        document.body.removeChild(boton);
        let elementos = document.querySelectorAll('.semana');
        let semanas_elegidas = document.querySelectorAll('.semana_elegida');
        for (i in elementos) {
            semana = elementos[i];
            semana.innerHTML = semanas_elegidas[i].value;
        }
    }
    
});