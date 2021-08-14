const empleado = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 35,
    email: "juanito@icloud.com",
    telefono: "55-1234-5678"
}

const obtenerInformacion_1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(empleado);
        }, Math.random() * 200);
    });
}

obtenerInformacion_1().then(resultado => console.log("1. " + resultado.nombre));
obtenerInformacion_1().then(resultado => console.log("2. " + resultado.apellido));
obtenerInformacion_1().then(resultado => console.log("3. " + resultado.edad));
obtenerInformacion_1().then(resultado => console.log("4. " + resultado.email));
obtenerInformacion_1().then(resultado => console.log("5. " + resultado.telefono));



const obtenerInformacion = (atributo) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(atributo);
        }, Math.random() * 200);
    });
}

const mostrarDatos = async() => {
    const dato_1 = await obtenerInformacion("---------------------------");
    const dato_2 = await obtenerInformacion("1. " + empleado.nombre);
    const dato_3 = await obtenerInformacion("2. " + empleado.apellido);
    const dato_4 = await obtenerInformacion("3. " + empleado.edad);
    const dato_5 = await obtenerInformacion("4. " + empleado.email);
    const dato_6 = await obtenerInformacion("5. " + empleado.telefono);
    console.log(dato_1);
    console.log(dato_2);
    console.log(dato_3);
    console.log(dato_4);
    console.log(dato_5);
    console.log(dato_6);
}

mostrarDatos();
