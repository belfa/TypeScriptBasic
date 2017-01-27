function holaMundo(nombre) {
    return "Hola Mundo!!! Soy " + nombre;
}
var nombre = 'Miguel Patiño';
var resultado = holaMundo(nombre);
var etiqueta = document.getElementById('container');
etiqueta.innerHTML = resultado;
