// BOTÃO SAIBA MAIS

const botaoSaibaMais =
    document.getElementById("botaoSaibaMais");

botaoSaibaMais.addEventListener("click", function () {

    alert(
        "A sustentabilidade permite produzir alimentos e, ao mesmo tempo, cuidar dos recursos naturais."
    );

});


// BOTÃO DO FUTURO

const botaoFuturo =
    document.getElementById("botaoFuturo");

const mensagemFuturo =
    document.getElementById("mensagemFuturo");

botaoFuturo.addEventListener("click", function () {

    mensagemFuturo.textContent =
        "💡 Uma solução: utilizar tecnologias de agricultura de precisão para reduzir desperdícios e melhorar a produção.";

});


// QUIZ

const respostas =
    document.querySelectorAll(".resposta");

const resultado =
    document.getElementById("resultado");

respostas.forEach(function (resposta) {

    resposta.addEventListener("click", function () {

        if (resposta.dataset.correta === "true") {

            resultado.textContent =
                "✅ Muito bem! A irrigação inteligente ajuda a economizar água.";

        } else {

            resultado.textContent =
                "❌ Essa resposta não está correta. Tente novamente!";

        }

    });

});


// FORMULÁRIO

const formulario =
    document.getElementById("formulario");

formulario.addEventListener("submit", function (evento) {

    evento.preventDefault();

    const nome =
        document.getElementById("nome").value;

    alert(
        "Obrigado pela participação, " +
        nome +
        "! Sua mensagem foi enviada."
    );

    formulario.reset();

});
