let carrinho = ['Maçã','Pão'];
console.log(`carrinho inicial: ${carrinho}`);

carrinho.push('Leite');
console.log(`Após adicionar o leite: ${carrinho}`);

carrinho.push('Queijo');
carrinho.push('Suco');
console.log(`Após alguns itens: ${carrinho}`);

let tarefas = ['Estudar peba', 'Lavar a Louça'];
console.log(`Tarefas iniciais: ${tarefas}`);

tarefas.unshift("Comprar café");
console.log(`Adicionando café: ${tarefas}`);

let melhores_times_do_mundo = ['Flamengo','Real Madrid','Vasco']
console.log('Lista verdadeira dos maiores clubes do mundo',melhores_times_do_mundo)

melhores_times_do_mundo.splice(1,0,"Altos")
console.log(`Lista segundo votação popular: ${melhores_times_do_mundo}`)