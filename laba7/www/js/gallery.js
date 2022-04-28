var slideIndex = 1;

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("slides");
	var dots = document.getElementsByClassName("min-img");
	var captionText = document.getElementById("caption");
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
	captionText.innerHTML = dots[slideIndex-1].alt;
}

$(document).ready(function(){
	showSlides(slideIndex);
});

$('.min-img.cursor').on( "click", function() {
	var n = $(this).index(".min-img.cursor")+1;
	currentSlide(n);
});


$('.prev').on( "click", function() {
	plusSlides(-1);
});

$('.next').on( "click", function() {
	plusSlides(1);
});