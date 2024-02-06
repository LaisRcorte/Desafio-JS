let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora do desafio";

function mensagemConsole(){
    console.log("O botão foi clicado");
}

function mensagemAlert(){
    alert("Eu amo JS");
}

function mensagemPrompt(){
    let cidade = prompt("Digite uma cidade do Brasil: ");
    alert(`Estive em ${cidade} e lembrei de você`);
}

function mensagemSoma(){
    let n1 = parseInt(prompt("Escolha um número: "));
    let n2 =parseInt(prompt("escolha outro numero: "));
    let soma= n1 + n2;
    alert(`A soma de ${n1} + ${n2} = ${soma}`);
}