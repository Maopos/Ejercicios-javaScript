// GET
axios("informacion.txt").then(res => console.log(res.data));
 

// POST
axios.post("https://reqres.in/api/users", {"nombre": "Mauricio","apellido": "Posada"}).then(res => console.log(res.data));