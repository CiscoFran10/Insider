import { deleteProduct, getCart } from "./api.js";

const addCartListeners = (cart) => {
	const buttons = document.querySelectorAll(".cart-item button");
	buttons.forEach((button) => {
		button.addEventListener("click", () => {
			const cartItem = button.parentElement.parentElement;
			const product = cart.products.find((p) => p.codigo === cartItem.id);

			deleteProduct(cart.token, product.codigo);
		});
	});
};

const initCart = async () => {
	const cart = await getCart();
	const { products } = cart;

	const cartContainer = document.getElementById("js-cart-list");
	const cartHeader = document.getElementById("js-cart-header");
	const cartFooter = document.getElementById("js-cart-footer");
	const cartQuantity = document.getElementById("js-cart-counter");
	const cartTotal = document.getElementById("js-cart-footer-total");
	const cartEmpty = document.getElementById("js-cart-empty");
	const cartButtonCounter = document.getElementById("js-cart-counter");

	if (products.length === 0) {
		cartHeader.classList.remove("active");
		cartFooter.classList.remove("active");
		cartEmpty.classList.add("active");
		cartButtonCounter.innerText = 0;
	} else {
		cartHeader.classList.add("active");
		cartFooter.classList.add("active");
		cartEmpty.classList.remove("active");

		const totalQuantity = products.reduce((a, b) => a + b.quantity, 0);
		const totalValue = products.reduce(
			(acc, item) => acc + item.valor * item.quantity,
			0
		);

		cartTotal.innerText = `total: R$ ${totalValue
			.toFixed(2)
			.replace(".", ",")}`;
		cartQuantity.innerText = `Sua cesta tem ${totalQuantity} item`;
		cartButtonCounter.innerText = totalQuantity;
	}

	if (cart && cartContainer) {
		cartContainer.innerHTML = products
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

export default initCart;
