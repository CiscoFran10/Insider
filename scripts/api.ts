const BASE_URL =
	"https://us-central1-insider-integrations.cloudfunctions.net/cart-api-fullstack-test";

import initCart from "./cart";
import { Product, Cart } from "../interfaces";

export const getProducts = async (): Promise<Product[] | undefined> => {
	try {
		const res = await fetch(BASE_URL + "/products");
		const products = await res.json();

		return products;
	} catch (error) {
		console.log(error);
	}
};

export const getCart = async (): Promise<Cart | undefined> => {
	try {
		const token: string = JSON.parse(
			window.localStorage.getItem("token") || ""
		);

		if (token) {
			const res = await fetch(`${BASE_URL}/cart/${token}`);
			const cart = await res.json();
			return cart;
		}
	} catch (error) {
		console.log(error);
	}
};

export const addProduct = async (product: {
	codigo: string;
	quantidade: number;
}) => {
	try {
		const token: string | null = JSON.parse(
			window.localStorage.getItem("token") || ""
		);

		const url = token ? `${BASE_URL}/cart/${token}` : `${BASE_URL}/cart`;
		const res = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(product),
		});

		if (res.ok) {
			const cartToken = await res.json();
			window.localStorage.setItem("token", JSON.stringify(cartToken.token));
			initCart();
		}
	} catch (error) {
		console.log("ola" + error);
	}
};

export const deleteProduct = async (token: string, product: string) => {
	try {
		const res = await fetch(`${BASE_URL}/cart/${token}/${product}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (res.ok) {
			initCart();
		}
	} catch (error) {
		console.log(error);
	}
};
