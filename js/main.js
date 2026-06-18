import { buscarPersonagens } from "./api.js";
import { renderizarPersonagem, mostrarMensagem } from "./util.js";

const form = document.querySelector('#search-form');
const input = document.querySelector('#search-input');

async function carregarPersonagens(nome = '') {
    try {
        mostrarMensagem('carregando Personagem...');
        const data = await buscarPersonagens(nome);
        renderizarPersonagem(data.results);
    } catch (error) {
        mostrarMensagem('Nenhum prsonagem encontrado.');
    }
    
};

form.addEventListener('submit', async function(event) {
    event.preventDefault();

    const nomeDigitado = input.value;

    await carregarPersonagens(nomeDigitado);
});

carregarPersonagens();

 async function iniciarApp() {
    const personagens = await buscarPersonagens();
    //console.log(personagens)
    renderizarPersonagem(personagens.results);
}

iniciarApp();