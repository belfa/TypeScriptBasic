function holaMundo(nombre) {
    return "Hola Mundo!!! Soy " + nombre;
}
var nombre = 'Miguel Patiño';
var resultado = holaMundo(nombre);
var etiqueta = document.getElementById('container');
etiqueta.innerHTML = resultado;
// Variables y tipos
var nombre = "Miguel Patiño";
var edad = 23;
var programador = true;
var langs = ["PHP", "JavaScript", "CSS"];
var cualquiera = "cualquier tipo";
var a = 7;
var b = 12;
if (a === 7) {
    var a_1 = 4;
    var b_1 = 1;
    console.log("DENTRO DE IF: " + a_1 + " - " + b_1);
}
console.log("FUERA DEL IF: " + a + " - " + b);
etiqueta.innerHTML = nombre + " - " + edad;
// Funciones y tipado
function devuelveNumero(num) {
    return "Numero devuelto" + num;
}
function devuelveString(texto) {
    if (texto == "hola")
        return 66;
    else
        return 90;
}
