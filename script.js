// MENU RESPONSIVO

const menuBotao = document.getElementById("menuBotao");
const menu = document.getElementById("menu");

menuBotao.addEventListener("click", function () {
    menu.classList.toggle("ativo");
});


// FECHAR MENU AO CLICAR EM UM LINK

const linksMenu = document.querySelectorAll("#menu a");

linksMenu.forEach(function (link) {

    link.addEventListener("click", function () {
        menu.classList.remove("ativo");
    });

});


// MENSAGEM SOBRE O FUTURO

const botaoFuturo = document.getElementById("botaoFuturo");
const mensagemFuturo = document.getElementById("mensagemFuturo");

const mensagens = [
    "A agricultura regenerativa ajuda a recuperar a saúde do solo.",
    "A energia solar pode reduzir a dependência de fontes não renováveis.",
    "Drones podem ajudar a identificar problemas nas plantações.",
    "A irrigação inteligente ajuda a economizar água.",
    "Tecnologia e preservação podem caminhar juntas."
];

botaoFuturo.addEventListener("click", function () {

    const numero = Math.floor(Math.random() * mensagens.length);

    mensagemFuturo.textContent = mensagens[numero];

});


// QUIZ

const opcoes = document.querySelectorAll(".opcao");
const resultadoQuiz = document.getElementById("resultadoQuiz");

opcoes.forEach(function (opcao) {

    opcao.addEventListener("click", function () {

        const respostaCorreta = opcao.dataset.correta;

        if (respostaCorreta === "true") {

            resultadoQuiz.textContent =
                "🎉 Parabéns! Essa é uma prática sustentável.";

        } else {

            resultadoQuiz.textContent =
                "🤔 Essa opção pode causar impactos ambientais. Tente novamente!";

        }

    });

});


// FORMULÁRIO

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (nome === "" || email === "" || mensagem === "") {

        alert("Por favor, preencha todos os campos.");

        return;
    }

    alert(
        "Obrigado pela sua participação, " +
        nome +
        "! Sua mensagem foi recebida."
    );

    formulario.reset();

});



const elementos = document.querySelectorAll(
    ".card, .desafio, .introducao, .sustentabilidade"
);

function mostrarElementos() {

    elementos.forEach(function (elemento) {

        const posicao = elemento.getBoundingClientRect().top;

        if (posicao < window.innerHeight - 80) {

            elemento.classList.add("visivel");

        }

    });

}

window.addEventListener("scroll", mostrarElementos);
window.addEventListener("load", mostrarElementos);
