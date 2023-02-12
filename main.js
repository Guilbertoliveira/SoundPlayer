function tocaSom(idSelecionado){
    const elemento = document.querySelector(idSelecionado);

  
   if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    }
   else {
        console.log ('não é audio');
    }
   

}

// document.querySelector('.tecla_pom').onclick = tocaSomPom;

const listaDeTeclas = document.querySelectorAll('.tecla');



for (let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];


    // as crases `` são uma forma de criar strings, template string
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (eventopadrao) {

        if (eventopadrao.code === 'Space' || eventopadrao.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}



