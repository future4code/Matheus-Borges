const nome = process.argv[2]
const idade = Number(process.argv[3])
const valorIdade = idade + 7
console.log(`Olá, ${nome}! Você tem ${idade} anos e daqui 7 anos terá ${valorIdade} anos.`)
