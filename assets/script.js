// Un tableau d'objets représentant chaque diapositive du carrousel. Chaque objet a une propriété "image" pour le nom du fichier image et une propriété "tagLine" pour le texte associé.
const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
// Étape 2 : Ajoutez des Event Listeners sur les flèches
const bannerImg = document.querySelector('.banner-img');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const dots = document.querySelectorAll('.dot'); // Sélectionne tous les points

let currentIndex = 0;//Un indice pour suivre la diapositive actuelle dans le tableau slides.

// Étape 3 : Ajoutez des bullet points au slider
//Une fonction qui met à jour les points indicateurs en ajoutant la classe 'dot_selected' au point correspondant à l'index actuel et en supprimant cette classe des autres points.
function updateDots(index) {
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('dot_selected'); // Ajoute la classe pour le point actuel
        } else {
            dot.classList.remove('dot_selected'); // Supprime la classe pour les autres points
        }
    });
}

// Une fonction qui met à jour le contenu du carrousel en fonction de l'index et de la direction. Elle corrige également un bug pour la première et la dernière image du carrousel.
function updateCarousel(index, direction) {
    // Correction du bug pour la première et la dernière image
    if (currentIndex === -1 && direction === 'left') {
        currentIndex = slides.length - 1;
    } else if (currentIndex === slides.length && direction === 'right') {
        currentIndex = 0;
    }

    const currentSlide = slides[currentIndex];

    // Mettre à jour l'image, le texte et les points indicateurs
    bannerImg.src = `assets/images/slideshow/${currentSlide.image}`;
    bannerImg.alt = `Slide ${currentIndex + 1}`;
    document.querySelector('p').innerHTML = currentSlide.tagLine;

    console.log(`Clic sur la flèche ${direction}`);
}
//Étape 4 : Modifiez le slide au clic sur le bouton, 
//Une variable pour suivre l'état du chargement initial. Elle est utilisée pour n'exécuter certaines opérations qu'une seule fois
let initialLoad = true;

// Gestionnaire d'événement pour la flèche gauche
//Lorsqu'elle est cliquée, met à jour l'index, appelle updateCarousel et updateDots, puis met à jour la variable initialLoad
arrowLeft.addEventListener('click', function () {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    console.log("Index après clic gauche :", currentIndex);
    updateCarousel(currentIndex, 'left');
    updateDots(currentIndex);
// Si c'est la première fois que la page est chargée, les fonctions updateCarousel et updateDots sont appelées avec l'index initial, et la variable initialLoad est mise à false.
    if (initialLoad) {
        initialLoad = false;
    }
});

// Gestionnaire d'événement pour la flèche droite
arrowRight.addEventListener('click', function () {
    currentIndex = (currentIndex + 1) % slides.length;
    console.log("Index après clic droite :", currentIndex);
    updateCarousel(currentIndex, 'right');
    updateDots(currentIndex);
    // Si c'est le chargement initial, mettez la variable à false après la première interaction
    if (initialLoad) {
        initialLoad = false;
    }
});

// Si c'est le chargement initial, appelez les fonctions une fois
if (initialLoad) {
    updateCarousel(currentIndex, 'démarrage');
    updateDots(currentIndex);
}