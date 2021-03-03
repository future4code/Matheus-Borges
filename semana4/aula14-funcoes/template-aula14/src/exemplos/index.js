                                                    //EXERCICIO 1
/*
a. 10 e 50 pois a função está retonando uma multiplicação de 5
b. acontece um TypeError*/

                                                    //EXERCICIO 2

/*
a. as strings Darvas e Caio porque estão na posição 0 e 1 do array 
b. seria impresso as strings Amanda e Caio do array*/

                                                    //EXERCICIO 3

/*
Multiplica os números pares por eles mesmos
multiplicandoPares*/

                                                    //EXERCICIO 4


/*
a.

let sobreMim = () =>{
    return 'Eu sou matheus, tenho 22 anos, moro em São Paulo e sou Estudante'
} 
console.log(sobreMim())*/

/*
b.

let sobreMimComParametro = (nome, idade, endereco, estudante) =>{
    estudante = true

    if(estudante){
        estudante = 'sou estudante.'
    }else{
        estudante = 'não sou estudante.'
    }

    sobreMim  = console.log('Eu sou', nome, 'tenho', idade, 'anos, moro em', endereco, 'e', estudante)
    return sobreMim
}

console.log(sobreMimComParametro('Matheus,', 23, 'São Paulo', true))*/

                                                    //EXERCICIO 5
/*
//a.
soma = (valor1, valor2) =>{
    resultado = valor1 + valor2
    return resultado
}

console.log(soma(79, 82))

//b.
igual = (valor1, valor2) =>{
    if(valor1 === valor2){
        console.log(true)
    }else{
        console.log(false)
    }
}

igual(89,89)

//c.
let mensagemArray = ['Olá Mundo','Olá Mundo','Olá Mundo','Olá Mundo','Olá Mundo','Olá Mundo','Olá Mundo','Olá Mundo','Olá Mundo','Olá Mundo']
dezVezes = (mensagem) =>{
    for (let item of mensagem){
        console.log(item)
    }
}

dezVezes(mensagemArray )
*/

                                                    //EXERCICIO 6

let array = [10, 22, 45, 78, 90, 52, 35, 67, 84, 22]


/*
a.
quantidadeElementos = (listaDeElementos) =>{
    for(let item of listaDeElementos){
        console.log(item)
    }
}

quantidadeElementos(array)*/



//b.
parOuImpar = (valor) => {
    if(valor %2 === 0){
        return true
    }else{
        return false
    }
}


/*
c.

let numerosPares = () =>{
    let arrayNumerosPares = []
        for (let numeroPar = 0; numeroPar < array.length; numeroPar++){
            if(array[numeroPar] %2 === 0){
                arrayNumerosPares.push(array[numeroPar])
        }
    }
    return arrayNumerosPares
}
console.log(numerosPares())
*/

/*
d.
let numerosPares = (lista) =>{
    let arrayNumerosPares = 0
    for (let numeroPar of lista){
        if(parOuImpar === true ){
            arrayNumerosPares++
        }
    }
    return arrayNumerosPares
}

console.log(numerosPares(array))
*/

