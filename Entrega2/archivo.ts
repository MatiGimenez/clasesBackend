class Operaciones {
    nro1: number;
    nro2: number;
    tipoDeOperacion: string;

    constructor(nro1: number, nro2: number, tipoDeOperacion: string){
        this.nro1 = nro1;
        this.nro2 = nro2;
        this.tipoDeOperacion = tipoDeOperacion;
    }
    operacion(){
        if(this.tipoDeOperacion === "suma"){
            import('./suma')
            .then(res => res.default)
        } else if(this.tipoDeOperacion === "resta"){
            import('./resta')
            .then(res => res.default)
        }
    }
};

let sumar = new Operaciones(2, 4, 'suma');
let restar = new Operaciones(10, 5, 'resta');
console.log(sumar);
console.log(restar);

