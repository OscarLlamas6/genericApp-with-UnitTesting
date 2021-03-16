var assert    = require("chai").assert;
var mensaje = require("../mensajeServidor");
var fecha = require("../generarFecha");

describe("testeando mensajeServidor: ", function() {
    describe("Validando mensaje: ", function() {
        it("Check the returned value using: assert.equal(value,'value'): ", function() {
        result   = mensaje.mensajeServidor();
        assert.typeOf(result, 'string');
        });
    });
});

describe("testeando generarFecha: ", function() {
    describe("Validando fecha: ", function() {
        it("Check the returned value using: assert.equal(value,'value'): ", function() {
        result   = fecha.generarFecha();
        assert.typeOf(result, 'string');
        });
    });
});