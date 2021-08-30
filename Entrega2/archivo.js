var Operaciones = /** @class */ (function () {
  function Operaciones(nro1, nro2, tipoDeOperacion) {
    this.nro1 = nro1;
    this.nro2 = nro2;
    this.tipoDeOperacion = tipoDeOperacion;
  }
  Operaciones.prototype.operacion = function () {
    if (this.tipoDeOperacion === "suma") {
      Promise.resolve()
        .then(function () {
          return require("./suma");
        })
        .then(function (res) {
          return res["default"];
        });
    } else if (this.tipoDeOperacion === "resta") {
      Promise.resolve()
        .then(function () {
          return require("./resta");
        })
        .then(function (res) {
          return res["default"];
        });
    }
  };
  return Operaciones;
})();
var sumar = new Operaciones(2, 4, "suma");
console.log(sumar);
