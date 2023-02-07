function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
}

document.querySelectorAll('.tecla');
//document.querySelector('.tecla_pom').onclick = tocaSomPom;

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = tocaSomPom;




