export interface Product {
	codigo: string;
	nome: string;
	valor: number;
	imagem: string;
}

export interface CartProduct {
	codigo: string;
	nome: string;
	valor: number;
	imagem: string;
	quantity: number;
}

export interface Cart {
	token: string;
	valor_total: number;
	itens_total: number;
	products: CartProduct[];
}
