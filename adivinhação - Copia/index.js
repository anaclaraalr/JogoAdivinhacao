// Lista de palavras
let palavras = [
    {palavra: "Gato", dicas:["pelos", "animal", "psi psi psi"]},
    {palavra: "Lasanha", dicas:["Itália", "molho", "Bolonhesa"]},
    {palavra: "Melancia", dicas:["vermelho", "fruta", "Magali"]},
    {palavra:"Python", dicas:["Liguagem de programação", "Programa de comedia", "Cobra"]}
]

// Elementos do Html
let input = document.getElementById("txt_input")
let div_resultado = document.getElementById("resultado")
let paragrafo_dicas = document.getElementById("pagrafos_dicas")
let paragrafo_tentativas = document.getElementById("pagrafos_tentativas")
// Selecionar uma palavra e suas dicas
let palavra_secreta = palavras[Math.floor(Math.random() * palavras.length)]
let palavra_selecionada = palavra_secreta.palavra.toLowerCase()
let dicas = palavra_secreta.dicas
let tentativas =  dicas.length
-
// Função de adivinhar
function adivinhar(){
    let digitado = input.value.trim().toLowerCase()
    if(digitado == palavra_selecionada){
        div_resultado.innerText = "Acertou!"
    } else{
        tentativas--
        div_resultado.innerText = "Errou :("
        
        if(tentativas > 0 ) {
            paragrafo_dicas.textContent ="Dicas: " + dicas[dicas.length - tentativas]
            paragrafo_tentativas.textContent ="Tentativas: " + tentativas    
        } else {
            location.reload()
        }
    }
}