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
import { ActionTypes, IProduct } from "./types";

export function addProductToCartRequest(product: IProduct) {
  return {
    type: ActionTypes.addProductToCartRequest,
    payload: {
      product,
    }
  }
}

export function addProductToCartSuccess(product: IProduct) {
  return {
    type: ActionTypes.addProductToCartSuccess,
    payload: {
      product,
    }
  }
}

export function addProductToCartFailure(productId: number) {
  return {
    type: ActionTypes.addProductToCartFailure,
    payload: {
      productId,
    }
  }
}