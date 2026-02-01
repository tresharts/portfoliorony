function abrirModal(listaDeImagens){
    conteudoModal.innerHTML = "";
    listaDeImagens.forEach(link => {
        conteudoModal.innerHTML += `<img src="${link}" loading="lazy" decoding="async">`;
    });
    conteudoModal.scrollTop = 0;
    overlay.classList.add("active");
    modal.classList.add("active");
    navbar.classList.add("hidden");
}

function fecharModal(){
    overlay.classList.remove("active");
    modal.classList.remove("active");
    navbar.classList.remove("hidden");
}