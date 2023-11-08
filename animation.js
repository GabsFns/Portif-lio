
setTimeout(function () {
    const loadingContainer = document.querySelector(".loading-container");
    const contentContainer = document.querySelector(".content-2");
    
    loadingContainer.style.opacity = 0; /* Diminua a opacidade da tela de carregamento */
    contentContainer.style.opacity = 1; /* Aumente a opacidade do conteúdo */
    
    setTimeout(function () {
        loadingContainer.style.display = "none";
    }, 1000); // Tempo de espera após a transição (1 segundo)
}, 4000); // Tempo em milissegundos (2 segundos)


