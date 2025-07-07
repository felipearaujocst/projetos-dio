const pessoa = {
    nome: "Felipe A costa",
    idade: 30,
    descrever: function(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}

const atributo = "idade"

pessoa['idade'] = "teste"

console.log(pessoa)

