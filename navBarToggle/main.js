//classList - shows/gets all classes
//contains - checks classList for specific class
//add - add class
//remove - remove class
//toggle - toggle class


const navBar = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navBar.addEventListener('click', function() {
    links.classList.toggle('show-links');
});