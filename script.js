document.addEventListener("DOMContentLoaded", function () {
    
    // 1. MECÂNICA DE ESCOLHA DE PERFIL (O EQUILÍBRIO)
    const botoesPerfil = document.querySelectorAll(".btn-perfil");
    const painelPerfil = document.getElementById("painel-perfil");

    botoesPerfil.forEach(botao => {
        botao.addEventListener("click", function () {
            // Remove a classe de seleção dos outros botões
            botoesPerfil.forEach(btn => btn.classList.remove("selecionado"));
            
            // Ativa o botão atual
            this.classList.add("selecionado");

            // Pega o texto explicativo do atributo customizado 'data-foco'
            const textoMissao = this.getAttribute("data-foco");

            // Insere o texto na caixinha com efeito simulando máquina de escrever simples
            painelPerfil.style.borderStyle = "dashed";
            painelPerfil.innerHTML = `<strong>SUA MISSÃO:</strong> ${textoMissao}`;
        });
    });

    // 2. FORMULÁRIO ESTILO CADERNO COMUNITÁRIO
    const formZine = document.getElementById("form-zine");

    formZine.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede a página de recarregar

        const nome = document.getElementById("zine-nome").value;
        const contato = document.getElementById("zine-contato").value;

        // Feedback simulando um carimbo de aceito no fanzine
        alert(`REGISTRADO NO CORRE!\n\nSalve, ${nome}. Guardamos seu contato (${contato}). Te chamamos pro próximo mutirão de agroecologia! ⚡✊`);
        
        // Reseta o formulário
        formZine.reset();
        painelPerfil.textContent = "Selecine uma opção acima para ver sua missão no front...";
        botoesPerfil.forEach(btn => btn.classList.remove("selecionado"));
        painelPerfil.style.borderStyle = "solid";
    });
});
