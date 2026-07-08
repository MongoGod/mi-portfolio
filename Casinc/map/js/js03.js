const registrosC = [31, 12, 3, 34];

const conv = (index) => index * 9/5 + 32;

const registrosF = registrosC.map(conv)

console.log(registrosC);
console.log(registrosF);