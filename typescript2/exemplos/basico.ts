let mensagens: string = 'Estudando Typescript'
console.log(mensagens)

let primeiroNome: string = 'Dart'
let segundoNome: string = 'Vader'
console.log(`O nome é ${primeiroNome+ ' ' +segundoNome}`)

let cont: number = 1
cont += cont
console.log(cont)

let filmes1 = [
    {filme: 'Os Oito Odiados', duracao: 100},
    {filme: 'Django', duracao: 120},
    {filme: 'Pulp Fiction', duracao: 95},
    {filme: 'Cães de Aluguel', duracao: 100},
    {filme: 'Kill Bill', duracao: 110},
    {filme: 'Django', duracao: 110}
]
let filmes2: string[] = ['Jackie Brown', 'Assassinos por Natureza', 'Bastardos Inglórios', 'À Prova de Morte']
console.log(filmes1)
console.log(filmes2)

let testeFilmes1 = filmes1.filter(elemento => { return elemento.filme == 'Django'})
console.log(testeFilmes1)

let testeFilmes = filmes1.reduce((anterior, atual) => { return anterior + atual.duracao },0)
console.log(testeFilmes)

let testeFilmes2 = filmes2.map((elemento) => { return elemento.length })
console.log(testeFilmes2)