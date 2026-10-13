

/*Inicializando a variavel dos indices do slider*/ 
let indiceSlides4 = 1;
mostrarSlides4(indiceSlides4);



/*Função responsavel por mosrar a imagem atual do slider*/
function imagemAtual4(numero4){
mostrarSlides4(indiceSlides4 = numero4);
}

/*unção responsal pelo cnotrole dos slides*/ 
function mostrarSlides4(numero4){

/*Contador que vai percorrer todos os slides*/ 
let contador4;

/*Pegando os elementos HTML*/
let slides4 = document.getElementsByClassName("slides4");
let miniaturas4 = document.getElementsByClassName("miniaturas4");

/*Condição 1 - Caso  o numero de imagens seja maior que o tamanho do slider
Volta para o primeira imagem do slider */
if(numero4 > slides4.length ){indiceSlides4 = 1}

/*Condição 2 - Caso o numero de imans seja menor que o tamanho do slider
Loop for vai percorrer  por todas as imagens e adicionar o display none*/ 
if (numero4 < 1){indiceSlides4 = slides4.length}
for (contador4 = 0; contador4 < slides4.length; contador4++){
slides4[contador4].style.display = "none";
}

/*O loop for vai percorrer por todas as miniaturas e remover 
a classe active*/
for (contador4 = 0; contador4 < miniaturas4.length; contador4++){
miniaturas4[contador4].classList.remove("active");
}

/*Deixar a imagem atual do slider como ativa*/
slides4[indiceSlides4 -1].style.display = "block";
/*O mesmo será feito com a miniatura correspondente*/ 
miniaturas4[indiceSlides4 -1].classList.add("active");
}

