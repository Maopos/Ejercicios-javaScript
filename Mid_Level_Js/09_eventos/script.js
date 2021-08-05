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

// -----------------------

// Muestra donde se ejecuta el evento
btn_2.addEventListener('click', (event)=>{ 
    console.log(event.target) 
});