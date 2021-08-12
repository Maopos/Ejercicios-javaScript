class Empleado{
    constructor(nombre, documento, cargo, email){
        this.nombre = nombre;
        this.documento = documento;
        this.cargo = cargo;
        this.email = email;
    }
}

const nomina = [
    ["Mauricio Posada", "9726604", "Programador", "maopos@icloud.com"],
    ["Ricardo Valbuena", "9726605", "Consultor", "ricardovalbuena@gmail.com"],
    ["Mariana Varela", "9726606", "Interventor"],
    ["Miguel Andrade", undefined, "Ingeniero", "migueland@icloud.com"],
    ["Ernesto Pillimue", "9726608"],
    ["Juan Carlos Sosa", "9726609", "Ingeniero", "sosahi@icloud.com"]

];

const empleados = [];

for (let i = 0; i < nomina.length; i++){
    empleados[i] = new Empleado(...nomina[i]);
};

const getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        if (empleados[id] == undefined){
            reject("El empleado no existe...")   
        } else {
            resolve(empleados[id]);
        }
    })
};

const getDocumento = (id) => {
    return new Promise((resolve, reject) => {
        if (empleados[id].documento == undefined){
            reject("El empleado no tiene documento registrado...")   
        } else {
            resolve(empleados[id].documento);
        }
    })
};

const getcargo = (id) => {
    return new Promise((resolve, reject) => {
        if (empleados[id].cargo == undefined){
            reject("El empleado no tiene cargo registrado...")   
        } else {
            resolve(empleados[id].cargo);
        }
    })
};

const getEmail = (id) => {
    return new Promise((resolve, reject) => {
        if (empleados[id].email == undefined){
            reject("El empleado no tiene correo registrado...")
        } else {
            resolve(empleados[id].email);
        }
    })  
};


let id = 3;

getEmpleado(id).then(empleado => {
    console.log(empleado.nombre);
    return getDocumento(id)
    }).then(documento => {
        console.log(documento);
        return getcargo(id)
    }).then(cargo => {
        console.log(cargo);
        return getEmail(id)
    }).then(email => {
        console.log(email);
}).catch(error => {
    console.log(error);
});

console.log(empleados[id]);