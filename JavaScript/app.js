"use strict";
var nombre = "eliana";
var num = 13123;
var hoy = new Date('2010-11-10');
console.log(hoy);
var cualquiera;
function getNombre() {
    return "Eliana";
}
var spyder = {
    nombre: 'juan',
    edad: 12,
    poder: 'morder'
};
console.log(spyder);
var nombre1 = "Juan";
var apellido = "Perez";
var edad = 23;
//let text = "Hola, " + nombre1 + " " + apellido + " " +"("+ edad +")";
//console.log(text);
var texto = "Hola, " + nombre1 + " " + apellido + " (" + edad + ") "; //agrego los campos con templeated literal
console.log(texto);
var texto2 = "" + (1 + 2);
console.log(texto2);
var txt3 = "" + getNombre();
console.log(txt3);
