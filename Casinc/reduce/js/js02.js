const productos = [
  { id: 'p101', nombre: 'Teclado', stock: 5 },
  { id: 'p202', nombre: 'Mouse', stock: 12 }
];

const productosById = productos.reduce((id, index) => id[index.id] = index, {})

console.log(productos);
console.log(productosById);