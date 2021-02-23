//Exercícios de interpretação de código
/*  1. a false
    1. b false
    1. c true 
    1. e boolean */

/*  2. a indefinido
    2. b nulo
    2. c 11
    2. d 3
    2. e [3, 19, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    2. f 9
*/

//Exercícios de escrita de código

/*
1. a
const idade = prompt(Number("Qual a sua idade?"))

1. b
const idadeMelhorAmigo = prompt(Number("Qual a idade do seu melhor amigo?"))

1. c
let diferencaIdade = idade - idadeMelhorAmigo

1. d
console.log('Sua idade é maior do que a do seu melhor amigo?', idade === idadeMelhorAmigo, diferencaIdade, 'Anos de diferença')
*/

/*
2. a
const numeroPar = prompt(Number('Digite um numero par'))

2. b
let restoNumeroPar = numeroPar%2
console.log(restoNumeroPar)

2. c
O resto de números Pares são 0

2. d
O resto de números ímpares são 1
*/

/*
3. a
let listaDeTarefas = []

3. b
listaDeTarefas[0] = prompt('Qual a sua tarefa de manhã')
listaDeTarefas[1] = prompt('Qual a sua tarefa da tarde')
listaDeTarefas[2] = prompt('Qual a sua tarefa da noite')

3. c
console.log(listaDeTarefas)

3. d
tarefaFeita = prompt(Number('Qual tarefa já foi concluída de 0 a 2'))

3. e
listaDeTarefas.splice(tarefaFeita, 1)

3. f
console.log(listaDeTarefas)
*/

/*
const nomeDoUsuario = prompt('Digite seu nome')
const emailDoUsuario = prompt('Digite o seu e-mail')

console.log('O e-mail "', emailDoUsuario, '" foi cadastrado com sucesso. Seja bem-vinda(o), ', nomeDoUsuario, '!')
*/

//Desafios

//Graus Fahrenheit(°F) para Kelvin(K)
/*
1. a
let g_Fahrenheit = 77
let g_Kelvin = (g_Fahrenheit - 32)*5/9 + 273.15

console.log(g_Kelvin)
*/

//Graus Celsius(°C) para Graus Fahrenheit (°C)

/*
1. b
let g_Celsius = 80
let g_Fahrenheit = (g_Celsius)*9/5 + 32

console.log(g_Fahrenheit)
*/

/*
1. c
let g_Celsius = 30
let g_Fahrenheit = (g_Celsius)*9/5 + 32
console.log(g_Fahrenheit)

let g_Kelvin = (g_Fahrenheit - 32)*5/9 + 273.15
console.log(g_Kelvin)*/

/*
1.d
let g_Celsius = prompt(Number('Digite a quantidade de Graus Celsius'))
let g_Fahrenheit = (g_Celsius)*9/5 + 32
console.log(g_Fahrenheit)

let g_Kelvin = (g_Fahrenheit - 32)*5/9 + 273.15
console.log(g_Kelvin)*/

/*
2. a
let Quilowatt_hora = parseFloat(0.05)
let residencia = 280.0/Quilowatt_hora

console.log(residencia)

2. b
let desconto = 15*100
let residenciaDesconto = residencia/desconto

console.log(residenciaDesconto)