/* const precoCombustivel = 5.79
const kmPorLitro = 10
const distancia = 100

let result = distancia * precoCombustivel / kmPorLitro

console.log(result) */

const precoCombustivel = 5.79
const kmPorLitro = 12
const distancia = 100

const litrosConsumidos = distancia / kmPorLitro

const resultado = litrosConsumidos * precoCombustivel
console.log(resultado.toFixed(1))