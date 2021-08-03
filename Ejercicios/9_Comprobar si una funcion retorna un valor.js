

function funcion1(){ //no retorna nada
  return ;  
}

function funcion2(){ //
  const A = 3 ;  
}

function funcion3(){ //retorna la suma de 2 + 2
  return 2 + 2;  
}

function funcion4(){ // retorna true
  return true;  
}

function funcion5(){ // retorna el literal de un objeto sin propiedades
  return {};  
}


let fn1 = funcion1();
console.log('funcion1 retorna:', fn1)

let fn2 = funcion2();
console.log('funcion2 retorna:', fn2)

let fn3 = funcion3();
console.log('funcion3 retorna:', fn3)

let fn4 = funcion4();
console.log('funcion4 retorna:', fn4)

let fn5 = funcion5();
console.log('funcion5 retorna:', fn5)