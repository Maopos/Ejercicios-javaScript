var numeros = [1, 3, 5, 7, 9, 17]

var suma = 0;

for (var i = 0; i < numeros.length; i++) {

suma = suma + numeros[i];

}

console.log(suma);


// Con reduce

var sumaReduce = numeros.reduce(function(acumulador, elemento) {

return acumulador + elemento;

}, 0)

console.log(sumaReduce);