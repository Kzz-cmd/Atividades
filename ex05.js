let pilhaDePratos = ['Prato_1','Prato_2','Prato_3'];
console.log(`Pilha Inicial: ${pilhaDePratos}`);
let pratoRemovido = pilhaDePratos.pop();
console.log(`Prato Removido: ${pratoRemovido}`);
console.log(`Pilha atualizada: ${pilhaDePratos}`);

//Remover do inicio
let listaBrasileirao = ["Vasco","Flamengo","São Paulo"];
let rebaixado = listaBrasileirao.shift();
console.log('Time rebaixado 2025:',rebaixado);
console.log('Classificação 2025:',listaBrasileirao);

//Remover de qualquer posição
let comentarios = ["Ótimo post",
    "Não gostei,asmei",
    "É melhor tirar isso do do ar"];
console.log(`Comentarios iniciais: ${comentarios}`);
comentarios.splice(2,1);
console.log(`Após remover o último comentario: ${comentarios}`)