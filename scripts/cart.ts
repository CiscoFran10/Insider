import { deleteProduct, getCart } from "./api";

import { Cart } from "../interfaces";

const addCartListeners = (cart: Cart) => {
	const buttons = document.querySelectorAll(".cart-item button");

	buttons.forEach((button) => {
		button.addEventListener("click", () => {
			const cartItem = button?.parentElement?.parentElement as HTMLElement;
			const product = cart.products.find((p) => p.codigo === cartItem.id);

			if (product) deleteProduct(cart.token, product.codigo);
		});
	});
};

const renderCart = (cart: Cart) => {
	const cartContainer = document.getElementById("js-cart-list");

	if (cart && cartContainer) {
		cartContainer.innerHTML = cart.products
			.map(
				({ codigo, nome, valor, imagem, quantity }) =>
					` <li class="cart-item" id="${codigo}">
					<div class="cart-image">
						<img src="${imagem}" alt="${nome}">
					</div>
					<div class="cart-info">
						<h2>${nome}</h2>
						<span>${quantity} x R$ ${valor.toFixed(2).replace(".", ",")}</span>
						<button>remover</button>
					</div>
				</li>`
			)
			.join(" ");

		addCartListeners(cart);
	}
};

const initCart = async () => {
	const cart = await getCart();
	const products = cart?.products;

	const cartHeader = document.getElementById("js-cart-header");
	const cartFooter = document.getElementById("js-cart-footer");
	const cartEmpty = document.getElementById("js-cart-empty");
	const cartButtonCounter = document.getElementById("js-cart-counter");

	if (products && cartHeader && cartFooter && cartEmpty && cartButtonCounter) {
		if (products.length === 0) {
			cartHeader.classList.remove("active");
			cartFooter.classList.remove("active");
			cartEmpty.classList.add("active");
			cartButtonCounter!.innerText = "0";
		} else {
			cartHeader.classList.add("active");
			cartFooter.classList.add("active");
			cartEmpty.classList.remove("active");

			const totalQuantity = products.reduce((a, b) => a + b.quantity, 0);
			const totalValue = products.reduce(
				(acc, item) => acc + item.valor * item.quantity,
				0
			);

			cartFooter.innerHTML = `
				<h3>total: R$ ${totalValue.toFixed(2).replace(".", ",")}</h3>`;

			cartHeader.innerHTML = `
				<img width="24" height="24" src="./assets/shopping-bag.svg" alt="icone de bolsa de compras">
				<h3>Sua cesta tem ${totalQuantity} item</h3>
				`;
			cartButtonCounter.innerText = `${totalQuantity}`;
		}
	}
	if (cart) renderCart(cart);
};

export default initCart;
