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
const dots = document.querySelectorAll('.dot'); // Sélectionnez tous les points

let currentIndex = 0;

// Étape 3 : Ajoutez des bullet points au slider
// Fonction pour mettre à jour les points indicateurs
function updateDots(index) {
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('dot_selected'); // Ajoute la classe pour le point actuel
        } else {
            dot.classList.remove('dot_selected'); // Supprime la classe pour les autres points
        }
    });
}

// Fonction pour mettre à jour le carrousel
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
