let alto = window.screen.availHeight;
let ancho = window.screen.availWidth;

comprar = confirm(`El ancho es: ${ancho}, El alto es: ${alto}`);

if (comprar) {
    alert("Compra Realizada!!");
} else {
    alert("Compra Cancelada!!");
}

let href = window.location.href;
let protocol = window.location.protocol;
let hostname = window.location.hostname;
let port = window.location.port;
let pathname = window.location.pathname;
let search = window.location.search;
let hash = window.location.hash;

let html = `Protocolo: ${protocol} <br> hostname: ${hostname} <br> port: ${port} <br> pathname: ${pathname} <br> search: ${search} <br> hash: ${hash} <br> <b>href:</b> ${href}`;

document.write(html);
