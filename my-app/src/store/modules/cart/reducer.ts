/**
 * Ponto central do módulo cart
 * Função que retorna os dados contidos no estado do cart
 */
import { Reducer } from "redux";
// -- Produzir um novo estado, a partir de um estado anterior
import produce from 'immer';
import { ActionTypes, ICartState } from "./types";

const INITIAL_STATE: ICartState = {
  items: [],
  failedStockCheck: [],
}

const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  console.log(state, action);
  console.log(action.payload);
  // -- Biblioteca para resolver a questão da imutabilidade
  return produce(state, draft => {
    switch(action.type) {
      //case 'ADD_PRODUCT_TO_CART': {
      case ActionTypes.addProductToCartSuccess: {
        const { product } = action.payload;

        const productInCartIndex = draft.items.findIndex(item => 
          item.product.id === product.id,  
        );

        if (productInCartIndex >= 0) {
          draft.items[productInCartIndex].quantity++;
        } else {
          draft.items.push({
            product,
            quantity: 1,
          });
        }
        /*
        return {
          ...state,
          items: [
            ...state.items,
            {
              product,
              quantity: 1,
            }
          ]
        };
        */

       break;
      }
      case ActionTypes.addProductToCartFailure: {
        //console.log(`Sem estoque. Id: ${JSON.stringify(action.payload, null, 2)}`);
        draft.failedStockCheck.push(action.payload.productId);
        break;
      }  
      default: {
        return draft;
      }
    }
  });  
}

export default cart;