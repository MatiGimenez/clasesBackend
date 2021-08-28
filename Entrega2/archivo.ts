let operaciones = async (nro1: number, nro2: number, operacion: (n1: number, n2: number) => number): Promise<number | any> => {
    await operacion(nro1, nro2);
};

let suma = (nro1: number, nro2: number): number => {
    return nro1 + nro2;
};
let resta = (nro1: number, nro2: number): number => {
    return nro1 - nro2;
};

console.log(operaciones(110, 2, suma));
console.log(operaciones(110, 2, resta));
