"use strict";
exports.__esModule = true;
var Resta = /** @class */ (function () {
    function Resta(nro1, nro2) {
        this.nro1 = nro1;
        this.nro2 = nro2;
    }
    Resta.prototype.resultado = function () {
        return this.nro1 - this.nro2;
    };
    return Resta;
}());
;
exports["default"] = Resta;
