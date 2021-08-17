deserializado = {"variable_1" : "Pedro","variable_2" : "Ana"};
console.log(deserializado);


serializado = JSON.stringify(deserializado);
console.log(typeof serializado + " " + serializado.variable_1);


deserializado = JSON.parse(serializado);
console.log(deserializado);




