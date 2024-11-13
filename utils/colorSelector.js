const colorSelector = document.getElementById('colorSelector');

colorSelector.addEventListener('change', function() {
	const selectedColor = this.value;
	this.style.backgroundColor = selectedColor;
	this.style.color = getContrastingTextColor(selectedColor); // Ajusta el color del texto para contraste
});

// Función para calcular el color de texto contrastante (blanco o negro)
function getContrastingTextColor(hexColor) {
	const r = parseInt(hexColor.substr(1, 2), 16);
	const g = parseInt(hexColor.substr(3, 2), 16);
	const b = parseInt(hexColor.substr(5, 2), 16);
	const brightness = (r * 299 + g * 587 + b * 114) / 1000;
	return brightness > 125 ? 'black' : 'white';
}