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


const obtenerPersona = (id) => {
    return new Promise((resolve, reject) => {
        if (personas[id] == undefined) {
            reject("No se ha encontrado la persona...")
        } else {
            resolve(personas[id]);
        }
    })
}

const obtenerInstagram = (id) => {
    return new Promise((resolve, reject) => {
        if (personas[id].instagram == undefined) {
            reject("No se ha encontrado el perfil de instagram de la persona...")
        } else {
            resolve(personas[id].instagram);
        }
    })
};

let id = 1;
obtenerPersona(id).then(persona => {
    console.log(persona.nombre);
    return obtenerInstagram(id)
    }).then(instagram => {
        console.log(instagram);
}).catch(err => {
    console.log(err);
})