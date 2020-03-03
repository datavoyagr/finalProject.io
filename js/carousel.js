/**
CS 290 Web Development
Final Project
Main Script

Resource: https://www.w3schools.com/w3css/w3css_slideshow.asp
Author: Nicole Miller
Date: February 29, 2020
Filename: carousel.js
 */

var myIndex = 0;
var slideIndex = 1;

window.onload = carousel();

function carousel(slides) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > slides.length) {
    myIndex = 1
  }
  slides[myIndex - 1].style.display = "block";
  setTimeout(carousel, 5000); // Change image every 2 seconds
}


window.onload = showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-red", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " w3-red";
}