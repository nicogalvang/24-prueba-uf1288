const alumnos = require('./alumnos.json');

let imprimir = (alumno) => {
    console.log("-----------------------------------");
    console.log( "Id alumno: " + alumno.alumno_id);
    console.log( "Nombre: " + alumno.nombre);
    console.log( "Edad: " + alumno.edad);
    console.log( "Curso: " + alumno.curso);
}
alumnos.forEach(alumno => {
    imprimir(alumno)
});

console.log("-----------------------------------")

for(let i=0; i<alumnos.length; i++) {
    imprimir(alumnos[i])
}