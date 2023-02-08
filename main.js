function tocaSom(idElemento){
    document.querySelector(idElemento).play();
}

//document.querySelector('.tecla_pom').onclick = tocaSomPom;

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < listaDeTeclas.length) {
    listaDeTeclas[contador].onclick = function () {
        tocaSom('#som_tecla_pom');
    };
    console.log(contador);
    contador++;
}

