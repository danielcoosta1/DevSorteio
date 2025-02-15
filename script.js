const button = document.querySelector(".sorteio__botao");
const textoResultado = document.querySelector(".sorteio__resultado");
const min = document.querySelector(".sorteio__input-min");




function sortearNumero(){
    const min = parseInt(document.querySelector(".sorteio__input-min").value);
    const max = parseInt(document.querySelector(".sorteio__input-max").value);
    
    console.log(min);
    console.log(max);

      // Verifica se os valores são válidos
      if (isNaN(min) || isNaN(max)) {
        alert("Por favor, insira números válidos.");
        return;
    }

    if (min >= max) {
        alert("O número mínimo deve ser menor que o número máximo.");
        return;
    }
    
    // Gera um número aleatório entre min e max (inclusive)
    const numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min;

    textoResultado.textContent = `O número sorteado é: ${numeroSorteado}`;

    limparNumeros();

}

function limparNumeros(){
    document.querySelector(".sorteio__input-min").value = "";
    document.querySelector(".sorteio__input-max").value = "";
    
}

function limparResultado() {
    textoResultado.textContent = "O número sorteado é:" ;
}

button.addEventListener("click", sortearNumero);
min.addEventListener("input", limparResultado);