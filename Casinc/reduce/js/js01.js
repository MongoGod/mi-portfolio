const precios = [400, 2344, 700, 20];

const preciofinal = precios.reduce((total, index) => total + index, 0);

console.log(precios);
console.log(preciofinal);