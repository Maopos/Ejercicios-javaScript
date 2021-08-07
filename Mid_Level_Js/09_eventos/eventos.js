// Con function
const btn = document.querySelector('.btn_1');
btn.addEventListener('click', function() { alert('Martin')});

// Arrow function
const btn_2 = document.querySelector('.btn_2');
btn_2.addEventListener('click', ()=>{ alert('Posada')})

// Remover un addEventListener - se usa function normal
const btn_3 = document.querySelector('.btn_3');
btn_3.addEventListener('click', saludar);

function saludar(){
  alert('Sepulveda');
  btn_3.removeEventListener('click', saludar);
}

// --------------------------------------------------------------

// Muestra donde se ejecuta el evento - en consola
btn_2.addEventListener('click', (event)=>{ 
    console.log(event.target) 
});

// ----------------------- Event Flow  ---------------------------

// Si ponemos `true`como parametro el evento se ejecuta de primero
const btn_4 = document.querySelector('.btn_4');
const cont_01 = document.querySelector('.container_01')
const cont_02 = document.querySelector('.container_02')

cont_02.addEventListener('click', ()=>{ alert('Container 02 Event Flow')},true);
cont_01.addEventListener('click', ()=>{ alert('Container 01 Event Flow')});


// ----------------------- stopPropagation -----------------------

// Llamando el metodo stopPropagation() los metodos asociados de los eventos no se ejecutan

btn_4.addEventListener('click', (e)=>{ 
  alert('Botón Event Flow')
  e.stopPropagation();
});


// ----------------------- Doble click ----------------------------

const btn_5 = document.querySelector('.btn_5');
btn_5.addEventListener('dblclick', (e)=>{ alert('Hiciste doble Click')});

// -------------------- Mouse over -----------------------

const btn_6 = document.querySelector('.btn_6');
btn_6.addEventListener('mouseover', (e)=>{ console.log('Hiciste mouse over')});

// -------------------- Mouse out -----------------------

const btn_7 = document.querySelector('.btn_7');
btn_7.addEventListener('mouseout', (e)=>{ console.log('Hiciste mouse out')});

// -------------------- Context Menu -----------------------

const btn_8 = document.querySelector('.btn_8');
btn_8.addEventListener('contextmenu', (e)=>{ alert('Diste click derecho')});

// -------------------- Keyboard Events -----------------------

const input = document.querySelector('.input_text');
input.addEventListener('keydown', (e)=>{ console.log('Tecla presionada')});
input.addEventListener('keypress', (e)=>{ console.log('Tecla pulsada')});
input.addEventListener('keyup', (e)=>{ console.log('Tecla soltada')});

// -------------------- Interfacce Events -----------------------

addEventListener('load', ()=>{console.log('Se ha cargado el sitio')});

addEventListener('error', ()=>{console.log('Error')});

addEventListener('scroll', ()=>{console.log('Se hizo scroll')});

addEventListener('beforeunload', ()=>{console.log('Va a abandonar el sitio')});

addEventListener('resize', ()=>{console.log('Cambio el tamaño de la ventana')});


const input2 = document.querySelector('.input_text_02');
const contenedor = document.querySelector('.select');

input2.addEventListener('select', (e)=>{console.log(e.target.value)});
input2.addEventListener('select', (e)=>{console.log('Selección inició en la posicion: ' + e.target.selectionStart)});
input2.addEventListener('select', (e)=>{console.log('Selección terminó en la posicion: ' + (e.target.selectionEnd - 1))});
input2.addEventListener('select', (e)=>{
  let start = e.target.selectionStart;
  let end = e.target.selectionEnd;
  let texto_completo = input2.value;
  contenedor.value = texto_completo.substring(start, end);
  
});