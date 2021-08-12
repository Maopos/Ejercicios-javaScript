function prueba(callback) {
    callback("pedro");
}


// Opcion 1
function decirNombre(nombre) {
    console.log(nombre);   
}

prueba(decirNombre);



// Opcion 2
prueba(nombre => console.log(nombre));


console.log('------------------------------------------');


class Persona {
    constructor(nombre, instagram) {
        this.nombre = nombre;
        this.instagram = instagram;
    }
}



const protoPersonas = [
    ["pedro", "@pedro_insta"],
    ["luis", "@luis_insta"],
    ["jose"]
];

const personas = [];

for (let i = 0; i < protoPersonas.length; i++) {
    personas[i] = new Persona(...protoPersonas[i]);  
}




const obtenerPersona = (id, cb) => {
    if (personas[id] == undefined) {
        cb("No se ha encontrado la persona...")
    } else {
        cb(null, personas[id], id);
    }
}

const obtenerInstagram = (id, cb) => {
    if (personas[id].instagram == undefined) {
        cb("No se ha encontrado el instagram...")
        } else {
            cb(null,personas[id].instagram)
        }
};

obtenerPersona(1, (err, persona, id) => {
    if (err) {
        console.log(err); 
    } else {
        console.log(persona.nombre);
        obtenerInstagram(id, (err, instagram) => {
            if (err) {
                console.log(err); 
            } else {
                console.log(instagram);
            }
        });  
    }
});

