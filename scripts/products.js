import { getProducts, addProduct } from "./api.js";

const addProductListeners = (products) => {
	const buttons = document.querySelectorAll(".card button");
	buttons.forEach((button) => {
		button.addEventListener("click", () => {
			const card = button.parentElement.parentElement;
			const product = products.find((p) => p.codigo === card.id);
			const { codigo } = product;
			addProduct({ codigo, quantidade: 1 });
		});
	});
};

const initProducts = async () => {
	const products = await getProducts();
	const productsContainer = document.getElementById("js-products-list");

	productsContainer.innerHTML = products
		.map(
			({ codigo, imagem, valor, nome }) =>
				`
    <li class="card" id="${codigo}">
      <div class="card-image">
        <img width="450" height="450" src="${imagem}" alt="${nome}">
      </div>
      <div class="card-info">
        <h2>${nome}</h2>
        <span>R$ ${valor.toFixed(2).replace(".", ",")}</span>
        <button>Adicionar</button>
      </div>
    </li>`
		)
		.join(" ");

	addProductListeners(products);
};

export default initProducts;
