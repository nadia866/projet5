const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Ajout d'event listeners sur les flèches
let bannerImg = document.querySelector('.banner-img');
let arrowLeft = document.querySelector(".arrow_left");
let arrowRight = document.querySelector(".arrow_right");

// Event listener pour la flèche gauche
arrowLeft.addEventListener("click", function() {
    console.log("Clic sur la flèche gauche");
});

// Event listener pour la flèche droite
arrowRight.addEventListener("click", function() {
    console.log("Clic sur la flèche droite");
});

//bullets points
const dots = document.querySelectorAll('.dot'); // Sélectionnez tous les points
let currentIndex = 0;

// Fonction pour mettre à jour les points indicateurs
function updateDots(index) {
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('dot_selected'); // Ajoutez la classe pour le point actuel
        } else {
            dot.classList.remove('dot_selected'); // Supprimez la classe pour les autres points
        }
    });
}
