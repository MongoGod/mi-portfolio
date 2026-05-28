/*Constantes, Objetos y Arrays*/

const objetos = [ {producto: 'Laptop', precio: 3000, cantidad: 10, categoria: 'Electrico'},
                  {producto: 'Ventilador', precio: 20, cantidad: 40, categoria: 'Electrico'},
                  {producto: 'Fideos', precio: 5, cantidad: 378, categoria: 'Consumible'},
                  {producto: 'kebab', precio: 5, cantidad: 140, categoria: 'Consumible'},
                  {producto: 'Fabuloso', precio: 10, cantidad: 190, categoria: 'Limpieza'},
                  {producto: 'Mr.Musculo', precio: 10, cantidad: 240, categoria: 'Limpieza'}];

const oe = objetos.filter(index => index.categoria == 'Electrico');
const oc = objetos.filter(index => index.categoria == 'Consumible');
const ol = objetos.filter(index => index.categoria == 'Limpieza');

/*Funciones*/ 

const ventaselec = oe.reduce((vtotal, index) => vtotal+index.precio , 0);
const ventascons = oc.reduce((vtotal, index) => vtotal+index.precio , 0);
const ventaslimp = ol.reduce((vtotal, index) => vtotal+index.precio , 0);



/*const loelec = oe.sort((index, index2) => index - index2);*/

/*Logs*/

console.log(objetos);
console.log(oe);
console.log(oc);
console.log(ol);
console.log(ventaselec);
console.log(ventascons);
console.log(ventaslimp);