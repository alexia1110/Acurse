let nombre: string = "eliana";
let num:number = 13123;

let hoy: Date = new Date('2010-11-10');

console.log(hoy);
let cualquiera: any;

function getNombre(){
  return "Eliana";
}

let spyder={
  nombre:'juan',
  edad : 12,
  poder: 'morder'
}

console.log(spyder);

let nombre1: string = "Juan";
let apellido: string = "Perez"
let edad:number = 23;

//let text = "Hola, " + nombre1 + " " + apellido + " " +"("+ edad +")";

//console.log(text);

let texto =`Hola, ${nombre1} ${apellido} (${edad}) `; //agrego los campos con templeated literal
console.log(texto);

let texto2:string=`${ 1 + 2 }`;
console.log(texto2);

let txt3 = `${getNombre()}`;
console.log(txt3);
