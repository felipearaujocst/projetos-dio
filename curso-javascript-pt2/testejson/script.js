const objs = [
  {
    nome: "Luis",
    idade: 30,
    esta_trabalhando: true,
    detalhes_profissão: {
      profissao: "Programador",
      empresa: "Empresa X",
    },
    hobbies: ["Programar", "Correr", "Ler"],
  },
  {
    nome: "João",
    idade: 25,
    esta_trabalhando: false,
    detalhes_profissão: {
      profissao: null,
      empresa: null,
    },
    hobbies: ["Jogar", "Academia"],
  }
];

//converter obj para json

const jsonData = JSON.stringify(objs)

console.log(jsonData)
console.log(typeof jsonData)

// converter json para objeto

const objData = JSON.parse(jsonData);

console.log(objData)
console.log(typeof objData)

objData.map((pessoa) => {
  console.log(pessoa.detalhes_profissão.profissao || "sem profissão definida")
})
