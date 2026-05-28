/*Constantes, Funciones y Clases*/

const precios = [100, 200, 300];

const preIva = precios.map(precios => {return precios * 1.22;});

const prdiff = precios.map(index => {if(index === 200){
    return index*3;
}else if(index === 100){
    return index/4;
}else{
    return index;
}
});

const redd = preIva.map(index => {return index * 0.82})

const productos = [{nombre: 'Laptop', precio: 1000},
                  {nombre: 'Mouse', precio: 20},
                  {nombre: 'Teclado', precio: 80}];

const caros = productos.filter(index => index.precio >= 50);

const objetoss = [{nombre: 'Laptop', precio: 1000, stock: 7},
                 {nombre: 'Mouse', precio: 20, stock: 12},
                 {nombre: 'Teclado', precio: 80, stock: 2}];

const stockb = objetoss.filter(index => index.stock <= 10)

/*Cambios*/

productos[0].precio = 2000;

productos[2].precio = 2000;

/*Logs*/

console.log(precios);

console.log(preIva);

console.log(prdiff);

console.log(redd)

console.log(productos)

console.log(caros)

console.log(objetoss);

console.log(stockb);

