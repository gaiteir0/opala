function showContent(car) {
    // Oculta todos os conteúdos
    document.querySelectorAll('.content-item').forEach(item => {
        item.style.display = 'none';
    });

    // Exibe o conteúdo selecionado
    document.getElementById(car).style.display = 'block';
}

