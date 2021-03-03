let titulo = document.getElementById("titulo-post")
let autor = document.getElementById("autor-post")
let conteudo = document.getElementById("conteudo-post")

let arrayInformacoes = []

let criarPost = () => {

    informacoes ={
        titulo: titulo.value, 
        autor: autor.value, 
        conteudo: conteudo.value
    }

    if(informacoes.titulo !== "" && informacoes.autor !== "" && informacoes.conteudo !== ""){
        arrayInformacoes.push(informacoes)
    }else{
        alert('Preencha as informaçôes corretamente!')
    }
    let listaPost = document.getElementById("container-de-posts")
    listaPost.innerHTML += `<h1>${informacoes.titulo}</h1>`
    listaPost.innerHTML += `<h3>${informacoes.autor}</h3>`
    listaPost.innerHTML += `<p>${informacoes.conteudo}</p>`
    titulo.value = "";
    autor.value = "";
    conteudo.value = "";
    
}
console.log(arrayInformacoes)
