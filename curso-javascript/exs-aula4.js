// class Carro {
//     marca;
//     cor;
//     precoCombustivel;
//     gastoPorKm;
//     kmsrodados;
//     gastoTotal;


//     constructor(marca, cor, kmsrodados){
//         this.marca = marca;
//         this.cor = cor;
//         this.precoCombustivel = 4.7;
//         this.gastoPorKm = 12;
//         this.kmsrodados = kmsrodados;
//         this.gastoTotal = (kmsrodados / this.gastoPorKm) * this.precoCombustivel

//     }
// }

// const carro1 = new Carro("sedan", "cinza", 100)

// console.log(carro1)


// class Carro {
//     marca;
//     cor;
//     gastoPorKm;



//     constructor(marca, cor, gastoPorKm){
//         this.marca = marca;
//         this.cor = cor;
//         this.gastoPorKm = gastoPorKm;

//     }

//     calcularPercurso(distanciaEmKm, precoCombustivel){

//         const result = distanciaEmKm * this.gastoPorKm * precoCombustivel
//         return result.toFixed(1)
//     }
// }

// const uno = new Carro("Fiat", "Vermelho", 1/12)
// const palio = new Carro("Fiat", "Preto", 1/10)


// console.log(uno.calcularPercurso(70, 5))
// console.log(palio.calcularPercurso(70, 5))




class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        const valorImc = this.peso / Math.pow(this.altura, 2)
        return valorImc.toFixed(1)
    }

    classificarImc() {
        const imc = this.calcularImc();

        if (imc < 18.5) {
            return (`abaixo do peso`)
        } else if (imc >= 18.5 && imc < 25) {
            return (`peso normal`)
        } else if (imc >= 25 && imc < 30) {
            return (`acima do peso`)
        } else if (imc >= 30 && imc < 40) {
            return (`Obeso`)
        } else {
            return (`obesidade grave`)
        }
    }
}

const jose = new Pessoa("José", 49, 1.75)

console.log(jose.classificarImc())

const renan = new Pessoa("Renan", 63, 1.75)

console.log(renan.classificarImc())