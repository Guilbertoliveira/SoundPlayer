//pegando o campo e inserindo valor dentro do campo
const campo = document.querySelector('#campoTelefone');
const inserindovalor = campo.value = '';

//pegando todas teclas
const teclas = document.querySelectorAll("#button_tecla");

// inserindo o valor encontrado
function clicado (valor) {
    campo.value = campo.value + valor;
}

let contador = 0;

while (contador < teclas.length) {


    let tecla = teclas[contador].value;
    teclas[contador].onclick  = function(){
        clicado(tecla);
    }

    contador++;
}
