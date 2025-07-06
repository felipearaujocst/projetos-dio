/* const num = 29;


if(num % 2 === 0){
    console.log(`O número ${num} é Par!`)
}else{
    console.log(`O número ${num} é Impar!`)
} */

/* const precoEtanol = 5.79;
const precoGasolina = 6.66;
const tipoDoCombustivel = "gasolina"
const kmPorLitro = 10
const distancia = 100

const litrosConsumidos = distancia / kmPorLitro

if (tipoDoCombustivel === "Etanol") {
    const valorPago = litrosConsumidos * precoEtanol
    console.log(valorPago)
} else {
    const valorPago = litrosConsumidos * precoGasolina
    console.log(valorPago)
} */

/* const notas = [8, 7.8, 6]

const soma = notas.reduce(function (acc, valor) {
    return acc + valor

}, 0)

const media = soma / notas.length

if (media < 5) {
    console.log(`${media.toFixed(1)} Aluno Reprovado`)
} else if (media >= 5 && media < 7) {
    console.log(`${media.toFixed(1)} Aluno em Recuperação`)
} else {
    console.log(`${media.toFixed(1)} Aluno Aprovado`)
} */

/* const peso = 60
const altura = 1.70

const imc = peso / Math.pow(altura, 2)


if (imc < 18.5) {
    console.log(`${imc}abaixo do peso`)
} else if (imc >= 18.5 && imc < 25) {
    console.log(`peso normal`)
} else if (imc >= 25 && imc < 30) {
    console.log(`acima do peso`)
} else if (imc >= 30 && imc < 40) {
    console.log(`Obeso`)
} else {
    console.log(`obesidade grave`)
} */


const valorCamisa = 54
const formaPagamento = "maisvezes"
let valorpago = 0

if (formaPagamento === "avistadebito") {
    let desconto = (valorCamisa * 10) / 100

    valorpago = valorCamisa - desconto

    console.log(`Total a pagar: ${valorpago}`)
} else if (formaPagamento === "avistapix") {
    let desconto = (valorCamisa * 15) / 100

    valorpago = valorCamisa - desconto

    console.log(`Total a pagar: ${valorpago}`)
} else if (formaPagamento === "duasvezes") {

    valorpago = valorCamisa / 2

    console.log(`Total a pagar: 2X ${valorpago}`)
} else if (formaPagamento === "maisvezes") {

    let acrescimo = (valorCamisa * 10) / 100

    let qntParcelas = 3

    valorpago = (valorCamisa + acrescimo) / qntParcelas

    console.log(`Total a pagar: ${qntParcelas}X ${valorpago}`)
} 

