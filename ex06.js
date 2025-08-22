nomes = ['joão','cleber','amanda']
console.log('enviando emails para:')
for (const nome of nomes){
    console.log(nome);
}

//Usar o método forEach
const numeros = [1,2,3,4,5];
console.log(`Dobrando cada número:`)
numeros.forEach((numero,indice) => {
    console.log(`O dobro do elemento no indice ${indice} é ${numero*2}`);  
});