/**
 * - Action Creators -
 * Ação do usuário que altera o estado do redux
 * Add item no carrinho...
 * Acrescentar unidades...
 * Cada ação será uma função diferente
 * 
 * - type: explicar o que a ação está fazendo
 * - informação adicional necessária para exec. a ação
 */
import { IProduct } from "./types";

export function addProductToCart(product: IProduct) {
  return {
    type: 'ADD_PRODUCT_TO_CART',
    payload: {
      product,
    }
  }
}