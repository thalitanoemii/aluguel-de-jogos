function contarJogosAlugados() {
    // Seleciona todos os elementos com a classe de jogos alugados
    let jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented');
    
    // Conta a quantidade de jogos alugados
    let quantidade = jogosAlugados.length;
    
    // Exibe o resultado no console
    console.log(`Total de jogos alugados: ${quantidade}`);
    
    return quantidade;
}
function alterarStatus(id) {

    let confirmacao = confirm("Tem certeza de que deseja alterar o status?");
    if (!confirmacao) return;

    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    
    
    if (imagem.classList.contains('dashboard__item__img--rented')){
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
    }
    contarJogosAlugados();
}