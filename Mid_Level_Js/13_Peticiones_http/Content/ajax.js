// AJAX - Asynchronous JavaScript And XML 
// (JavaScript asíncrono y XML)
// técnica de desarrollo web para crear aplicaciones interactivas o RIA 
// (Rich Internet Applications).

let peticion = new XMLHttpRequest();

peticion.addEventListener("load", () => {
    let respuesta;
    if (peticion.status == 200) respuesta = peticion.response;
    else respuesta = "Error: no se encuentra el recurso";
    console.log('Con AJAX: ');
    console.log(JSON.parse(respuesta));
    

});

peticion.open("GET", "informacion.txt");

peticion.send();

// ---------------------------------------------------------------

let peticion_2 = new XMLHttpRequest();

peticion_2.addEventListener("load", () => {
    let respuesta;
    if (peticion_2.status == 200 || peticion_2.status == 201) {
        respuesta = peticion_2.response;
    } else {
        respuesta = "Error: no se encuentra el recurso"
    }
    
    console.log(JSON.parse(respuesta));
    
})

peticion_2.open("POST", "https://reqres.in/api/users");

peticion_2.setRequestHeader("Content-Type", "application/json;charset=UTF8");

peticion_2.send(JSON.stringify({
    "name": "morpheus",
    "job": "leader"
}));