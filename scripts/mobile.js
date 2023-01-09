const toggleMenu = (menu, button1, button2) => {
	button1.addEventListener("click", () => {
		menu.classList.add("active");
		button2.classList.add("active");
	});

	button2.addEventListener("click", () => {
		menu.classList.remove("active");
		button2.classList.remove("active");
	});
};

const initMobile = () => {
	const menuButton = document.getElementById("js-menu-button");
	const backButton = document.getElementById("js-back-button");
	const cart = document.getElementById("js-cart");

	toggleMenu(cart, menuButton, backButton);
};

export default initMobile;
