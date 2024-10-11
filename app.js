footerDate = document.getElementById('date');

// Get date
const date = new Date();
let year = date.getFullYear();

footerDate.innerHTML = year;


// // Gradient mouse move effect
// const body = document.querySelector('body')
// body.addEventListener('mousemove', (e) => {
//     const mouseX = e.clientX;
//     const mouseY = e.clientY;

// body.style.background = `radial-gradient(at ${mouseX}px ${mouseY}px, #fff, #ADBEC8)`;
// });



/* MODAL BOX START */

// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.addEventListener("click", () => {
  modal.style.display = "block";
  document.body.style.overflow = "hidden"; // disables body scrolling when modal is open
});




// When the user clicks on <span> (x), close the modal
span.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
})

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
})

/* MODALBOX FOR PROJECT 2 START */

const btn2 = document.getElementById("myBtn2");
const modalPro2 = document.getElementById("modalPro2");

btn2.addEventListener("click", () => {
  modalPro2.style.display = "block";
  document.body.style.overflow = "hidden";
})

span.addEventListener("click", () => {
  modalPro2.style.display = "none";
  document.body.style.overflow = "auto";
})

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", (event) => {
  if (event.target == modalPro2) {
    modalPro2.style.display = "none";
    document.body.style.overflow = "auto";
  }
})

/* */




/* MODAL BOX FOR PROJECT 3 START */

const btn3 = document.getElementById("myBtn3");
const modalPro3 = document.getElementById("modalPro3");

btn3.addEventListener("click", () => {
  modalPro3.style.display = "block";
  document.body.style.overflow = "hidden";
})

span.addEventListener("click", () => {
  modalPro3.style.display = "none";
  document.body.style.overflow = "auto";
})

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", (event) => {
  if (event.target == modalPro3) {
    modalPro3.style.display = "none";
    document.body.style.overflow = "auto";
  }
})

/* */





/* MODAL BOX END */






/* SLIDESHOW FOR MODAL START  PROJECT 1*/

let slideIndex1 = 1;
showSlides1(slideIndex1);

// Next/previous controls
function plusSlides1(n) {
  showSlides1(slideIndex1 += n);
}

// Thumbnail image controls
function currentSlide1(n) {
  showSlides1(slideIndex1 = n);
}

function showSlides1(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides1");
  let dots = document.getElementsByClassName("dot1");
  if (n > slides.length) {slideIndex1 = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex1-1].style.display = "block";
  dots[slideIndex1-1].className += " active";
}


/* SLIDESHOW FOR MODAL END */



/* SLIDESHOW FOR MODAL START PROJECT 2*/
let slideIndex2 = 1
showSlides2(slideIndex2);

// Next/previous controls
function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

// Thumbnail image controls
function currentSlide2(n) {
  showSlides(slideIndex2 = n);
}

function showSlides2(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides2");
  let dots = document.getElementsByClassName("dot2");
  if (n > slides.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex2-1].style.display = "block";
  dots[slideIndex2-1].className += " active";
}


/* SLIDESHOW FOR MODAL END */





/* SLIDESHOW FOR MODAL START PROJECT 3 */
let slideIndex3 = 1
showSlides3(slideIndex3);

// Next/previous controls
function plusSlides3(n) {
  showSlides3(slideIndex3 += n);
}

// Thumbnail image controls
function currentSlide3(n) {
  showSlides3(slideIndex3 += n);
}

function showSlides3(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides3");
  let dots = document.getElementsByClassName("dot3");
  if (n > slides.length) {slideIndex3 = 1}
  if (n < 1) {slideIndex3 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex3-1].style.display = "block";
  dots[slideIndex3-1].className += " active";
}


/* SLIDESHOW FOR MODAL END */


/*  SWITCH BUTTON   */


// Toggle darkmode
const switchBut = document.getElementById("switch");
const element = document.body;  

switchBut.addEventListener('change', () => {
  if(switchBut.checked){
    element.classList.toggle("dark-mode");
  } else {
    element.classList.remove("dark-mode");
  }

});