const input = document.querySelector('.header__search-bar-input');
const button = document.querySelector('.header__search-bar-button');

input.addEventListener('focus', () => {
	button.style.backgroundColor = 'white';
});

input.addEventListener('blur', () => {
	button.style.backgroundColor = '';
});