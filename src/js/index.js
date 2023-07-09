// OBEJETIVO 01 - Quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo 

// Passo 01 - Pegar os personagens no JS para poder verificar quando o usuário passar o mouse em cima de um deles 

const personagens = document.querySelectorAll('.personagem');

// Passo 02 - Adicionar a classe "selecionado" no personagem que o usuário passar o cursor do mouse 

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450){
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
        
        // Passo 03 - Verificar se já existe um personagem selecionado. Se sim, devemos remover a seleção dele

        removerSelecaoDoPersonagem();
    
        personagem.classList.add('selecionado');

        // OBJETIVO 02 - Quando passar o mouse em cima do personagem na listagem, trocar a Imagem, o nome e a descrição do "personagem grande"

        // Passo 01 - Pegar o elemento do "personagem grande" para adicionar as informações nele

        alterarImagemPersonagemSelecionado(personagem);

        //Passo 03 - Alterar o nome do "personagem grande"

        alterarNomePersonagemSelecionado(personagem);

        //Passo 04 - Alterar a descrição do personagem

        alterarDescricaoPersonagem(personagem);
    })
})



function alterarDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');

    //Passo 02 - Alterar a imagem do personagem grande 
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}

