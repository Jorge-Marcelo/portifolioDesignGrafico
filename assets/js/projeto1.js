/*Inicializando a variavel dos indices do slider*/ 
let indiceSlides = 1;
mostrarSlides(indiceSlides);



/*Função responsavel por mosrar a imagem atual do slider*/
function imagemAtual(numero){
mostrarSlides(indiceSlides = numero);
}

/*unção responsal pelo cnotrole dos slides*/ 
function mostrarSlides(numero){

/*Contador que vai percorrer todos os slides*/ 
let contador;

/*Pegando os elementos HTML*/
let slides = document.getElementsByClassName("slides");
let miniaturas = document.getElementsByClassName("miniaturas");

/*Condição 1 - Caso  o numero de imagens seja maior que o tamanho do slider
Volta para o primeira imagem do slider */
if(numero > slides.length ){indiceSlides = 1}

/*Condição 2 - Caso o numero de imans seja menor que o tamanho do slider
Loop for vai percorrer  por todas as imagens e adicionar o display none*/ 
if (numero < 1){indiceSlides = slides.length}
for (contador = 0; contador < slides.length; contador++){
slides[contador].style.display = "none";
}

/*O loop for vai percorrer por todas as miniaturas e remover 
a classe active*/
for (contador = 0; contador < miniaturas.length; contador++){
miniaturas[contador].classList.remove("active");
}

/*Deixar a imagem atual do slider como ativa*/
slides[indiceSlides -1].style.display = "block";
/*O mesmo será feito com a miniatura correspondente*/ 
miniaturas[indiceSlides -1].classList.add("active");
}