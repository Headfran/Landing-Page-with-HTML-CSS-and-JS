const menu = document.getElementById('menu');
const navbarLinks = document.querySelector('.links');

menu.addEventListener('click', () => {
	navbarLinks.classList.toggle('show');
});

navbarLinks.addEventListener('click', () => {
	navbarLinks.classList.remove('show');
});