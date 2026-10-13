

/*Redes Sociais*/

/*Função que vai abrir o link do instagram*/
const instgramLink = "https://www.instagram.com/jorgemarcelojr?vrfl=MWJwZXcyd3EyOGRzeA%3D%3D&utm_source=qr";
const instagramButton = document.getElementById("instagram");

function instagram(instgramLink) {
const newTableInstagram = window.open(instgramLink, "_blank");
newTableInstagram.focus();
}

instagramButton.addEventListener("click", function () {
instagram(instgramLink);
});



/*Função que vai abrir o link do linkedin*/
const linkedinLink = "https://www.linkedin.com/in/jorge-marcelo-067a5017b?utm_source=share_via&utm_content=profile&utm_medium=member_ios";
const linkedinButton = document.getElementById("linkedin");

function linkedin(linkedinLink) {
const newTableLinkedin = window.open(linkedinLink, "_blank");
newTableLinkedin.focus();
}

linkedinButton.addEventListener("click", function () {
linkedin(linkedinLink);
});

/*Função que vai abrir o link do Github*/
const githubLink = "https://github.com/Jorge-Marcelo";
const githubButton = document.getElementById("github");

function github(githubLink) {
const newTableGithub = window.open(githubLink, "_blank");
newTableGithub.focus();
}

githubButton.addEventListener("click", function () {
github(githubLink);
});

const curriculoLink =
"https://drive.google.com/file/d/1oXqvwzfxg-0D4KXxrSOLqj1g9clBrw0Z/view?usp=sharing";

const CVButton = document.getElementById("curriculo");
function curriculo(curriculoLink) {
const newTableCV = window.open(curriculoLink, "_blank");
newTableCV.focus();
}

CVButton.addEventListener("click", function () {
curriculo(curriculoLink);
});

