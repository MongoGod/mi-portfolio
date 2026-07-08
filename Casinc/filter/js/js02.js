const correos = ["alumno1@institucion.edu", "spam@gmail.com", "profe@institucion.edu"];

const filtrado = correos.filter((index) => index.includes('@institucion.edu'));


console.log(correos);
console.log(filtrado);