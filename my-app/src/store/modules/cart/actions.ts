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

export function addProductToCartRequest(product: IProduct) {
  return {
    type: 'ADD_PRODUCT_TO_CART_REQUEST',
    payload: {
      product,
    }
  }
}

export function addProductToCartSuccess(product: IProduct) {
  return {
    type: 'ADD_PRODUCT_TO_CART_SUCCESS',
    payload: {
      product,
    }
  }
}

export function addProductToCartFailure(productID: number) {
  return {
    type: 'ADD_PRODUCT_TO_CART_FAILURE',
    payload: {
      productID,
    }
  }
}