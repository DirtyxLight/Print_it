const slides = [
	{
		"image": "./assets/images/slideshow/slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "./assets/images/slideshow/slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "./assets/images/slideshow/slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "./assets/images/slideshow/slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
];


const next = document.querySelector('.arrow_right'),
	  previous = document.querySelector('.arrow_left'),
	  dots = document.querySelector('.dots');
let index = 0;


for (let i in slides) {
	const dot = document.createElement("div");
	dots.appendChild(dot);
	dot.className = "dot";
}

let selectedDot = document.querySelectorAll(".dot")[index];
const bannerImg = document.createElement("img");
const nameLine = document.createElement("p");
banner.appendChild(bannerImg);
banner.appendChild(nameLine);
bannerImg.classList.add("banner-img");


const changeCurrentSlide = () => {
	bannerImg.src = slides[index].image;
	nameLine.innerHTML = slides[index].tagLine;
	selectedDot.classList.remove('dot_selected');
	selectedDot = document.querySelectorAll(".dot")[index];
	selectedDot.classList.add('dot_selected');
 };
 changeCurrentSlide();



next.addEventListener('click', (e) => {
	index = (index + 1) % slides.length;
	changeCurrentSlide();
});

previous.addEventListener('click', (e) => {
	index = (index + slides.length - 1) % slides.length;
	changeCurrentSlide();
});
