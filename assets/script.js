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
//Étape 2 : Ajoutez des Event Listeners sur les flèches 
const bannerImg = document.querySelector('.banner-img');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const dots = document.querySelectorAll('.dot'); // Sélections de tous les points

let currentIndex = 0;

// Étape 3 : Ajoutez des bullet points au slider
function updateDots(index) {
    dots.forEach((dot, i) => {
        dot.classList.toggle('dot_selected', i === index);
    });
}
// Fonction pour mettre à jour le carrousel
function updateCarousel(index, direction) {
    currentIndex = (index + slides.length) % slides.length;

    const { image, tagLine } = slides[currentIndex];

    bannerImg.src = `assets/images/slideshow/${image}`;
    bannerImg.alt = `Slide ${currentIndex + 1}`;
    document.querySelector('p').innerHTML = tagLine;

    console.log(`Clic sur la flèche ${direction}`);
}

