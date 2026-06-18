document.addEventListener("DOMContentLoaded", function () {
    const cartoes = document.querySelectorAll(".cartão");

    cartoes.forEach(cartao => {
        cartao.addEventListener("click", function () {
            
            // Fecha os outros cartões
            cartoes.forEach(c => {
                if (c !== cartao) {
                    c.style.transform = "scale(1)";
                    c.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
                    c.style.backgroundColor = "white";
                }
            });

            // Ativa o cartão clicado
            cartao.style.transform = "scale(1.05)";
            cartao.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
            cartao.style.backgroundColor = "#dff6dd";
        });
    });
});
