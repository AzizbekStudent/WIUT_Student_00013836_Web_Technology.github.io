let slideIndex = 1; // set slide number
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n); // we change slide number
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlide"); // class of pictures 
  let dots = document.getElementsByClassName("dot"); // decoration dots
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // we hide slide
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", ""); // replace class  active to empty 
  }
  slides[slideIndex-1].style.display = "block"; // show needed slide
  dots[slideIndex-1].className += " active"; // decoration of dots
}