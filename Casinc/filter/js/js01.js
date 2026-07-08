const productos = [
  { ref: "A1", nombre: "Monitor", stock: 12 },
  { ref: "B2", nombre: "Teclado RGB", stock: 0 },
  { ref: "C3", nombre: "Mouse Pro", stock: 5 }
];

const disponibles = productos.filter((index) => index.stock > 0);

console.log(productos);
console.log(disponibles);