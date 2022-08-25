//pegando todos os elementos de + e -
const controle = document.querySelectorAll('[data-controle]');
const estatisticas = document.querySelectorAll('[data-estatistica]');


controle.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.dataset.controle, //target traz onde foi clicado => qual elemento foi clicado
             evento.target.parentNode);  //pegando  elemento pai, para acessar o filho => metodo parentNode
        atualizaEstatisticas(evento.target.dataset.peca);
            }); 
})
//pegando todos os elementos de input
function manipulaDados(operacao, elementoPai){
    const peca = elementoPai.querySelector("[data-contador]");
    if(operacao === '+'){
        peca.value = parseInt(peca.value) + 1;
    }else{
        if(parseInt(peca.value) > 0) {
            peca.value = parseInt(peca.value) - 1;
            }
    }
}

function atualizaEstatisticas(peca) {
    estatisticas.forEach(elemento => {
         elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })    
}

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}