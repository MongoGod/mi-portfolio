/*Constantes, Objetos y Arrays*/

const objetos = [ {producto: 'Laptop', precio: 3000, cantidad: 10, categoria: 'Electrico'},
                  {producto: 'Ventilador', precio: 20, cantidad: 40, categoria: 'Electrico'},
                  {producto: 'Fideos', precio: 5, cantidad: 378, categoria: 'Consumible'},
                  {producto: 'kebab', precio: 5, cantidad: 140, categoria: 'Consumible'},
                  {producto: 'Fabuloso', precio: 10, cantidad: 190, categoria: 'Limpieza'},
                  {producto: 'Mr.Musculo', precio: 10, cantidad: 240, categoria: 'Limpieza'},
                  {producto: 'Ac.Pantene', precio: 10, cantidad: 1, categoria: 'aseo'}];

const oe = objetos.filter(index => index.categoria == 'Electrico');
const oc = objetos.filter(index => index.categoria == 'Consumible');
const ol = objetos.filter(index => index.categoria == 'Limpieza');
const precios = objetos.map(index => index.precio);
const objbar = objetos.filter(index => index.precio <= 1000);
const punicos = objetos.filter(index => index.cantidad === 1);

/*Funciones*/ 

const ventaselec = oe.reduce((vtotal, index) => vtotal+index.precio , 0);
const ventascons = oc.reduce((vtotal, index) => vtotal+index.precio , 0);
const ventaslimp = ol.reduce((vtotal, index) => vtotal+index.precio , 0);
const poreden = precios.sort((n1, n2) => n2 - n1);
const nmayor = poreden[0];
const promediop1 = precios.reduce((vtotal, index) => vtotal+index , 0);
const ordenprecios = precios.sort((n1, n2) => n2 - n1);

/*Logs*/

console.log(ventaselec);
console.log(ventascons);
console.log(ventaslimp);
console.log(nmayor);
console.log(objbar);
console.log(punicos);
console.log(promediop1 / 6);
console.log(ordenprecios);