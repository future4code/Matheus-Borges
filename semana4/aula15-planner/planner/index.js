let adicionarTarefa =  () => {
    let tarefa = document.getElementById("tarefa").value
    let selecao = document.getElementById("dias-semana").value
    document.getElementById(selecao).innerHTML += "<p>- " + tarefa + "</p>"
    document.getElementById("tarefa").value = ""
    document.getElementById("dias-semana").value = "domingo"
}