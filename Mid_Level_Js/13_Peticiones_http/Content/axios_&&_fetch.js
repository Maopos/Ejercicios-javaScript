const getName = async() => {

    let peticion = await fetch("informacion.txt");
    let resultado = await peticion.json();
    let HTMLcode = `<br><h1>Hola ${resultado.nombre}, tienes ${resultado.edad} años de edad.</h1>`
    document.querySelector(".resultado").innerHTML = HTMLcode;

     console.log(resultado);
         
}

const getClean = () => {
    document.querySelector(".resultado").innerHTML = "";
};



const boton_saludar = document.getElementById("nombre");
boton_saludar.addEventListener("click", getName);


const boton_limpiar = document.getElementById("limpiar");
boton_limpiar.addEventListener("click", getClean);