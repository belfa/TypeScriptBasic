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