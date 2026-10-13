/*
Autor: Jorge Marcelo
Data de Criação: 28/08/2023
Github: https://github.com/Jorge-Marcelo
Linkedin: https://www.linkedin.com/in/jorge-marcelo-067a5017b/
Instagram: https://www.instagram.com/10_stronger/
Threads: https://www.threads.net/@10_stronger
*/


/*Inicializando a variavel dos indices do slider*/ 
let indiceSlides2 = 1;
mostrarSlides2(indiceSlides2);



/*Função responsavel por mosrar a imagem atual do slider*/
function imagemAtual2(numero2){
mostrarSlides2(indiceSlides2 = numero2);
}

/*unção responsal pelo cnotrole dos slides*/ 
function mostrarSlides2(numero2){

/*Contador que vai percorrer todos os slides*/ 
let contador2;

/*Pegando os elementos HTML*/
let slides2 = document.getElementsByClassName("slides2");
let miniaturas2 = document.getElementsByClassName("miniaturas2");

/*Condição 1 - Caso  o numero de imagens seja maior que o tamanho do slider
Volta para o primeira imagem do slider */
if(numero2 > slides2.length ){indiceSlides2 = 1}

/*Condição 2 - Caso o numero de imans seja menor que o tamanho do slider
Loop for vai percorrer  por todas as imagens e adicionar o display none*/ 
if (numero2 < 1){indiceSlides2 = slides2.length}
for (contador2 = 0; contador2 < slides2.length; contador2++){
slides2[contador2].style.display = "none";
}

/*O loop for vai percorrer por todas as miniaturas e remover 
a classe active*/
for (contador2 = 0; contador2 < miniaturas2.length; contador2++){
miniaturas2[contador2].classList.remove("active");
}

/*Deixar a imagem atual do slider como ativa*/
slides2[indiceSlides2 -1].style.display = "block";
/*O mesmo será feito com a miniatura correspondente*/ 
miniaturas2[indiceSlides2 -1].classList.add("active");
}

