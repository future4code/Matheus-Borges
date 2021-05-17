const listaTarefa = [
    "lavar a louça", "passar roupa" 
]
const tarefa = process.argv[2]

listaTarefa.push(tarefa)

console.table(`${listaTarefa}`)