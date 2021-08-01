var alumnos = ["mati", "leo", "tincho", "jimmy", "franco"];

for (var i = 0; i < alumnos.length; i++) {
  console.log(alumnos[i]);
}

var curso = alumnos.map(function (i) {
  return i;
});
console.log(curso);
