const menuToggle = document.querySelector('#navToggle');
const navLinks = document.querySelector('.menuNav');

menuToggle.addEventListener('click', () => {
    console.log("ok");
    navLinks.classList.toggle('active');
});