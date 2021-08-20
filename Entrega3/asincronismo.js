const dividirTexto = function (texto, callback) {
  let separador = texto.split(" ");
  let intervalo = setInterval(() => {
    for (let i = 0; i < separador.length; i++) {
      console.log(separador[i]);
      if (i === separador.length - 1) {
        clearInterval(intervalo);
        callback();
      }
    }
  }, 1000);
  console.log("Proceso completo");
};
let cadena1 = "esta es la funcion numero 1";
let cadena2 = "esta es la funcion numero 2";
let cadena3 = "esta es la funcion numero 3";
let finalizar = () => {
  console.log("Se imprimió todo el texto");
};
dividirTexto(
  cadena1,
  dividirTexto(cadena2, dividirTexto(cadena3, finalizar()))
);
