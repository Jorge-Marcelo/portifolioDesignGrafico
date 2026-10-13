

/*Inicializando a variavel dos indices do slider*/ 
let indiceSlides5 = 1;
mostrarSlides5(indiceSlides5);



/*Função responsavel por mosrar a imagem atual do slider*/
function imagemAtual5(numero5){
mostrarSlides5(indiceSlides5 = numero5);
}

/*unção responsal pelo cnotrole dos slides*/ 
function mostrarSlides5(numero5){

/*Contador que vai percorrer todos os slides*/ 
let contador5;

/*Pegando os elementos HTML*/
let slides5 = document.getElementsByClassName("slides5");
let miniaturas5 = document.getElementsByClassName("miniaturas5");

/*Condição 1 - Caso  o numero de imagens seja maior que o tamanho do slider
Volta para o primeira imagem do slider */
if(numero5 > slides5.length ){indiceSlides5 = 1}

/*Condição 2 - Caso o numero de imans seja menor que o tamanho do slider
Loop for vai percorrer  por todas as imagens e adicionar o display none*/ 
if (numero5 < 1){indiceSlides5 = slides5.length}
for (contador5 = 0; contador5 < slides5.length; contador5++){
slides5[contador5].style.display = "none";
}

/*O loop for vai percorrer por todas as miniaturas e remover 
a classe active*/
for (contador5 = 0; contador5 < miniaturas5.length; contador5++){
miniaturas5[contador5].classList.remove("active");
}

/*Deixar a imagem atual do slider como ativa*/
slides5[indiceSlides5 -1].style.display = "block";
/*O mesmo será feito com a miniatura correspondente*/ 
miniaturas5[indiceSlides5 -1].classList.add("active");
}

