//crear instancias por medio de Constructores != Literales

var num = new Array(2, 3, 5, 7, 11);

console.log(num);

//-----------------------------

let restart1 = new Function("a", "b", "return a - b");

console.log(restart1(2, 3));

//--------------------------

var persona = new Object();

persona.Id = 1;

persona.nombre = "Juan";

console.log(persona);
