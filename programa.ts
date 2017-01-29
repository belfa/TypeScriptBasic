//Función para decorar
function arranque(lanzar: string){
    return (target: Function)=>{
      target.prototype.lanzamiento = function():void{
          console.log(lanzar);
      }
    };
}

@arranque('Lanzamiento de TypeScript')
class Programa{
    public nombre: string;
    public version: number;

    getNombre(){
        return this.nombre;
    }
    setNombre(nombre:string){
        this.nombre = nombre;
        return this;
    }

    setVersion(version:number){
        this.version = version;
        return this;
    }

    getVersion(){
        return this.version;
    }
}
var programa = new Programa();

programa.lanzamiento();

class EditorVideo extends Programa{
    public timeline:number;

    setTimeline(timeline:number){
        this.timeline = timeline;
        return this;
    }

    getTimeline(){
        return this.timeline;
    }

    getAllData():string{
        return "Nombre: "+this.getNombre()+" - Version: "+this.getVersion()+" - Time Line: "+this.getTimeline();
    }
}



var editor = new EditorVideo();
editor.setVersion(8).setNombre('Camtasia Studio').setTimeline(4000);
console.debug(editor.getAllData());

// Lógica del formulario

var programas:Array<Programa> = [];

function guardar(){
    var nombre = (<HTMLInputElement>document.getElementById("nombre")).value.toString();

    var programa  = new Programa();
    programa.setNombre(nombre);

    programas.push(programa);

    var list = "";
    for(var i = 0; i < programas.length; i++){
        list+="<li>"+programas[i].getNombre()+"</li>";
    }

    var listado = <HTMLElement>document.getElementById("listado");

    listado.innerHTML = list;
}