

// GET 
fetch("https://reqres.in/api/users?page=2")
    .then(res => res.json())
    .then(res => console.log(res))



// POST
fetch("https://reqres.in/api/users", {
    method: "POST",
    body: JSON.stringify({"nombre": "Mauricio","apellido": "Posada"}),
    headers: {"Content-Type": "application/json"}
})
    .then(res => res.json())
    .then(res => console.log(res))


// -------------------------------------------

imagen = document.querySelector(".laptop")

fetch("laptop.jpg")
    .then(res => res.blob())
    .then(img => imagen.src = URL.createObjectURL(img))