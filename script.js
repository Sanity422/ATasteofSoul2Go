// MENU ICON

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle('active');
}

// TRACK SHOPPING CART
function addToCart(item) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  const index = cart.findIndex(i => i.id === item.id);
  if (index !== -1) {
    cart[index].quantity += 1;
  } else {
    cart.push({ ...item, quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById("cart-count").textContent = count;
}

document.addEventListener("DOMContentLoaded", updateCartCount);

// IMG SLIDER
const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    }
}

function showSlide(index){
    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}

// Menu drop-down box

let dropDown = document.querySelector(".menu-dropdown button");
let menuNavbar = document.querySelector(".dropdown-content");
let arrow = document.querySelector(".dp .arrow");

dropDown.onclick = () => {
    menuNavbar.classList.toggle('active');
    
    if(arrow.textContent === ">"){
        arrow.textContent = "˅";
    }
    else {
        arrow.textContent = ">";

    }
}
