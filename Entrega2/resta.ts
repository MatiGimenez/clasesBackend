class Resta{
    nro1:number;
    nro2:number;

    constructor(nro1:number, nro2:number){
        this.nro1 = nro1;
        this.nro2 = nro2;
    }
    private resultado(){
        return this.nro1 - this.nro2;
    }
};
export default Resta
