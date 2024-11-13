document.getElementById("createContactForm").addEventListener("submit", function(event) {
	
	// Evita el envío automático del formulario
	event.preventDefault();

	// Referencia de todos los campos necesarios
	const color = document.getElementById("colorSelector");
	const name = document.getElementById("createContactFormName");
	const surname = document.getElementById("createContactFormSurname");
	const email = document.getElementById("createContactEmail");
	const phone = document.getElementById("createContactPhone");

	// Validación del campo de color
	if (color.value === "#ffffff") {
		alert("Por favor, selecciona un color");
		return;
	}

	// Referencia del contenedor padre, donde se colocan todos los contactos
	const contactList = document.getElementById("contactList");

	/* La estructura para cada nuevo contacto es la siguiente.

		<div class="contact">
			<div class="contact__identity">
				<span class="contact__image">E</span>
				<span class="contact__name">Ejemplo</span>
			</div>
			<span class="contact__email">example@gmail.com</span>
			<span class="contact__phone">+34000000000</span>
		</div>
	*/

	// Crea un div con la clase "contact" y lo añade al contenedor padre
	const contactContainer = document.createElement("div");
	contactContainer.classList.add("contact");
	contactList.appendChild(contactContainer);

	// Crea un div con la clase "contact__identity" y lo añade al div contact
	const identityContainer = document.createElement("div");
	identityContainer.classList.add("contact__identity");
	contactContainer.appendChild(identityContainer);

	// Crea un span con la clase "contact__image" y lo añade al div contact__identity
	// Recoge el primer carácter del nombre y lo capitaliza
	// Cambia el color de fondo por el valor de color, recogido de los inputs
	const contactImage = document.createElement("span");
	contactImage.textContent = name.value[0].toUpperCase();
	contactImage.classList.add("contact__image");
	contactImage.style.backgroundColor = color.value;
	identityContainer.appendChild(contactImage);

	// Crea un span con la clase "contact__name" y lo añade al div contact__identity
	// Se le asigna los valores de name y surname, dejando un espacio
	const contactName = document.createElement("span");
	contactName.textContent = name.value + " " + surname.value;
	contactName.classList.add("contact__name");
	identityContainer.appendChild(contactName);

	// Crea un span con la clase "contact__email" y lo añade al div contact
	// Se le asigna el valor de email
	const contactEmail = document.createElement("span");
	contactEmail.textContent = email.value;
	contactEmail.classList.add("contact__email");
	contactContainer.appendChild(contactEmail);

	// Crea un span con la clase "contact__phone" y lo añade al div contact
	// Se le asigna el valor de phone
	const contactPhone = document.createElement("span");
	contactPhone.textContent = phone.value;
	contactPhone.classList.add("contact__phone");
	contactContainer.appendChild(contactPhone);

	// Suma 1 al contador de contactos: Recoge el span "(0)", elimina los paréntesis, lo convierte a número, le suma 1 y lo devuelve formateado con los paréntesis.
	const counterElement = document.getElementById("contactCounter");
	let counter = counterElement.textContent.replace(/[()]/g, '');
	counter = parseInt(counter, 10) + 1;
	counterElement.textContent = "(" + counter + ")";

	// Limpia todos los valores de los campos
	color.value = "#ffffff";
	color.style.backgroundColor = "#fff";
	color.style.color = "#000";
	name.value = "";
	surname.value = "";
	email.value = "";
	phone.value = "";
});

