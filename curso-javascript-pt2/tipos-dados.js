// const pessoa ={
//     genero: 'masculino'
// }

// const felipe = {
//     nome: "Felipe",
//     idade: 30,
//     __proto__: pessoa
// }

// console.log(felipe.genero)

// function Pessoa(nome, idade) {
//     this.nome = nome
//     this.idade = idade
// }

// Pessoa.prototype.falar = function(){
//     console.log(`Meu nome é: ${this.nome}`)
// }

// const felipe = new Pessoa('Felipe', 30)

// felipe.falar()

// class Pessoa {
//     constructor(nome, idade){
//         this.nome = nome
//         this.idade = idade
//     }

//     falar(){
//         console.log(`Meu nome é: ${this.nome} e tenho ${this.idade} Anos`)
//     }

// }

// const felipe = new Pessoa('Felipe', 31)

// felipe.falar()

// const pessoa ={
//     genero: 'Masculino'
// }


// const felipe = Object.create(pessoa)

// felipe.nome = 'Felipe'

// console.log(felipe)

// function Pessoa(nome, idade){
//     this.nome = nome
//     this.idade = idade
// }

// Pessoa.prototype.falar = function(){
//     console.log(`${this.nome}`)
// }

// const felipe = {
//     genero: 'masculino'
// }

// Pessoa.call(felipe, 'nome', 31)


// console.log(felipe)

String.prototype.toPlang = function(){
    return `P ${this}`
}


console.log('teste'.toPlang())
