/*
Autor: Jorge Marcelo
Data de Criação: 28/08/2023
Github: https://github.com/Jorge-Marcelo
Linkedin: https://www.linkedin.com/in/jorge-marcelo-067a5017b/
Instagram: https://www.instagram.com/10_stronger/
Threads: https://www.threads.net/@10_stronger
*/


/*Inicializando a variavel dos indices do slider*/ 
let indiceSlides3 = 1;
mostrarSlides3(indiceSlides3);



/*Função responsavel por mosrar a imagem atual do slider*/
function imagemAtual3(numero3){
mostrarSlides3(indiceSlides3 = numero3);
}

/*unção responsal pelo cnotrole dos slides*/ 
function mostrarSlides3(numero3){

/*Contador que vai percorrer todos os slides*/ 
let contador3;

/*Pegando os elementos HTML*/
let slides3 = document.getElementsByClassName("slides3");
let miniaturas3 = document.getElementsByClassName("miniaturas3");

/*Condição 1 - Caso  o numero de imagens seja maior que o tamanho do slider
Volta para o primeira imagem do slider */
if(numero3 > slides3.length ){indiceSlides3 = 1}

/*Condição 2 - Caso o numero de imans seja menor que o tamanho do slider
Loop for vai percorrer  por todas as imagens e adicionar o display none*/ 
if (numero3 < 1){indiceSlides3 = slides3.length}
for (contador3 = 0; contador3 < slides3.length; contador3++){
slides3[contador3].style.display = "none";
}

/*O loop for vai percorrer por todas as miniaturas e remover 
a classe active*/
for (contador3 = 0; contador3 < miniaturas3.length; contador3++){
miniaturas3[contador3].classList.remove("active");
}

/*Deixar a imagem atual do slider como ativa*/
slides3[indiceSlides3 -1].style.display = "block";
/*O mesmo será feito com a miniatura correspondente*/ 
miniaturas3[indiceSlides3 -1].classList.add("active");
}

