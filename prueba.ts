function holaMundo(nombre){
    return "Hola Mundo!!! Soy "+ nombre;
}

var nombre = 'Miguel Patiño';

var resultado = holaMundo(nombre);

var etiqueta = <HTMLElement>document.getElementById('container');
etiqueta.innerHTML = resultado;

// Variables y tipos
var nombre:string = "Miguel Patiño";
var edad:number = 23;
var programador:boolean = true;
var langs:Array<string> = ["PHP","JavaScript","CSS"];
var cualquiera:any = "cualquier tipo";


var a = 7;
var b = 12;

if(a === 7){
    let a = 4;
    let b = 1;

    console.log("DENTRO DE IF: "+a+" - "+b);
}

console.log("FUERA DEL IF: "+a+" - "+b);

etiqueta.innerHTML = nombre+" - "+edad;

// Funciones y tipado
function devuelveNumero(num:number):string{
    return "Numero devuelto"+num;
}

function devuelveString(texto:string){
    if(texto == "hola") return 66;
    else return 90;
}


