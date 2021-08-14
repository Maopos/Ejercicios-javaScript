const materiasHTML = document.querySelector('.materias');

const materias = [
    {
       nombre: "Fisica",
       nota: 7
    },{
        nombre: "Programación",
        nota: 8
    },{
        nombre: "Matemáticas",
        nota: 9
    },{
        nombre: "Química",
        nota: 10
    },{
        nombre: "Biología",
        nota: 9
    },{
        nombre: "Inglés",
        nota: 10
    }
]


const obtenerMateria = (id) => {
    return new Promise((resolve, reject) => {
        materia = materias[id];
        if (materia == undefined) {
            reject('No existe la materia');
        } else {
            setTimeout(()=>{resolve(materia)}, Math.random() * 400);
        }
    })
}

// obtenerMateria(0).then(res => console.log(res));
// obtenerMateria(1).then(res => console.log(res));
// obtenerMateria(2).then(res => console.log(res));
// obtenerMateria(3).then(res => console.log(res));
// obtenerMateria(4).then(res => console.log(res));
// obtenerMateria(5).then(res => console.log(res));


const mostrarMaterias = async() => {
    let materia = [];
    
    
    for (let i = 0; i < materias.length; i++) {
        materia[i] = await obtenerMateria(i);
        // console.log(materia[i]);
        let newHTMLcode = `
        <div class="materia">
            <div class="nombre">${materia[i].nombre}</div>
            <div class="nota">${materia[i].nota}</div>
        </div>
        `;
        
        materiasHTML.innerHTML += newHTMLcode;
    }
}

mostrarMaterias();