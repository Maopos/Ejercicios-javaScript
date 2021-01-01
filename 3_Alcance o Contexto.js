


function funcion1(){

    var a = 3;

        function funcion3(){

                var b = 5;

                    function funcion5(){

                        console.log(a, b);
                        
                        }
    
        }

}

function funcion2(){

  var a = 7;

  function funcion4(){

    console.log(a);
    
    }
  
  }

  //console.log(a); ReferenceError... porque las variables estan dentro de las funciones
