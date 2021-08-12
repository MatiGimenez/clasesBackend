function Usuario(nombre, apellido, libros, mascotas) {
this.nombre = nombre || "";
this.apellido = apellido || "";
this.libros = libros || [];
this.mascotas = mascotas || [];
}

Usuario.prototype.getFullName =  function() {
    return `${this.nombre} ${this.apellido}`
};
Usuario.prototype.getMascotas = function() {
    return this.mascotas
}

Usuario.prototype.addMascota = function(mascota){
  this.mascotas.push(mascota)
};

// Usuario.prototype.addBook = function(book, autor){
    // this.libros.push(book = book, autor = autor)
// }
Usuario.prototype.getLibros = function() {
    return this.libros.map((libro) => libro.nombre)
}
const alumno = new Usuario(
    "Gonzalo",
    "Gil",
    [{nombre: 'El Psicoanalista', escritor: 'John Katzenbach'}],
    ['Carlos',]
)

alumno.addMascota('Moncho');

console.log(alumno.getFullName());
console.log(alumno.getMascotas());
console.log(alumno.getLibros())





