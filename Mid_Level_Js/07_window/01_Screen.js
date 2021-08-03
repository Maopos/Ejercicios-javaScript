document.write('<b>Screen</b>');
document.write('<br>');

const screen = window.screen;

console.log(screen);
document.write(screen.availWidth + ' x ' + screen.availHeight + '<br>');
document.write('<b>Color depth: </b>' + screen.colorDepth + ' bit' + '<br>');


const screenLeft = window.screenLeft; 
const screenTop = window.screenTop;

console.log(screenLeft, screenTop);
document.write(`Left: <b>${screenLeft}</b><br>
                Top: <b>${screenTop}</b>`);


// ----------------------------------------------------------------

// Muestra cuanto se ha desplazado la pantalla con scrollX y scrollY
const scrollX = window.scrollX;
const scrollY = window.scrollY;


console.log('Scroll X: ' + scrollX + ' Scroll Y: ' + scrollY);