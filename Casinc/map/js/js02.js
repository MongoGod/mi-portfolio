const baseDeDatos = [
  { id: 101, nombre: "Ana García", especialidad: "Software" },
  { id: 102, nombre: "Luis Pérez", especialidad: "Redes" },
  { id: 103, nombre: "María Solís", especialidad: "Ciberseguridad" }
];

const simple = baseDeDatos.map((index) => index.nombre);

console.log(baseDeDatos);
console.log(simple);