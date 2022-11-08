const estudante = {
    nome : "Gabriel",
    sobrenome : "Castro",
    matricula : "01234",
    notas : ['9','8','10']
}


estudante.modulo = 'Fundamentos';

console.log(estudante.nome);
console.log(estudante.notas[1]);
console.log(estudante.modulo);

const novoEstudante = {
    ...estudante,
    nome: "Astrodev",
}
novoEstudante.notas.push('9')
novoEstudante.modulo = 'Front-end'
console.log(novoEstudante.notas)
console.log(novoEstudante)
estudantesLabenu = [estudante, novoEstudante]
console.log(estudantesLabenu)

const carrinho ={
    nomeCliente : "Maiana",
    formaDePagamento : "pix",
    enderecoCliente : "Rio Sena"
}

carrinho.compras = [
    {produto: "absorvente", valor: "R$: 3,00", quantidade: "2"},
    {produto: "protetor diário", valor: "R$: 2,00", quantidade:"3"},
    {produto: "pasta de dente", valor: "R$: 2,50", quantidade:"1"},
]
console.log(carrinho.compras.length)

const carrinhoPresente ={
    ...carrinho,
    nomeCliente: "Vincent",
    formaDePagamento: "Cartão Presente"
}
console.log(carrinhoPresente);
