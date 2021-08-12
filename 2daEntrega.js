class Usuario{
    constructor (nombre,apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido =apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    } 
    getFullName(){
        return `${this.nombre} ${this.apellido}`
    };
    addMascota(mascota){
        this.mascotas.push(mascota)
    };
    getMascotas(){
        return this.mascotas;
    };
    getLibros(){
       return this.libros.map(libro =>libro.nombre)
    }
};

const alumno = new Usuario (
    'Gonzalo',
    'Gil',
    [{nombre: 'El Psicoanalista', autor: 'John Katzembach'}],
    ['Carlos']
);
const nombreCompleto = alumno.getFullName();
const getPet = alumno.addMascota('Moncho');
const books = alumno.getLibros();
const pets = alumno.getMascotas();

console.log(nombreCompleto);
console.log(books);
console.log(pets);


