import { AxiosResponse } from 'axios';
/**
 * Script para manter todas as configurações do saga
 * do módulo cart.
 * 
 * O saga vai interceptar a action addProductToCard, faça algumas 
 * checagem e, se passar, aí cim executa o que tem no reducer
 * 
 * all ->
 * takeLatest -> como o 'checkProductStock' é assíncrono, pode demorar um pouco
 *               para rodar. Caso haja muitos cliques para a action, o 
 *               takeLatest, vai cancelar qualquer chamada anterior, cancelar e 
 *               rodar apenas a última
 * takeEvery -> todos os cliques para a action iriam disparar a função 
 *              'checkProductStock'
 * takeLeading -> se clicamos 5x, descartamos as 4 últimas e aguardamos apenas
 *                a primeira finalizar e esta será a única considerada
 */
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { IState } from '../..';
import api from '../../../services/api';
import { addProductToCartFailure, addProductToCartRequest, addProductToCartSuccess } from './actions';
import { ActionTypes } from './types';

type CheckProductStockRequest = ReturnType<typeof addProductToCartRequest>;

interface IStockResponse {
  id: number;
  quantity: number;
}
/**
 * function* é um generator, ou uma função assíncrona
 * function* == async function
 */
function* checkProductStock(action: CheckProductStockRequest) {
  console.log('Chamou o checkProductStock');

  const { payload } = action;
  const { product } = payload;
  // -- yield é como no c#.
  // -- Aguarda o código finalizar antes de passar para a próxima linha
  // -- select serve para buscar informações do estado
  const currentQuantity: number = yield select((state: IState) => {
    return state.cart.items.find(item => item.product.id === product.id)?.quantity ?? 0;
  });

  // -- call é usado para executar a api, ou qlqr promisse
  const availableStockResponse: AxiosResponse<IStockResponse> = yield call(api.get, `stock/${product.id}`);

  if(availableStockResponse.data.quantity > currentQuantity) {
    console.log('Pode adicionar');
    // -- O put do redux-saga é como se fosse o dispach
    // -- Todo método do saga precisa do yield
    yield put(addProductToCartSuccess(product));
  } else {
    console.log('Falta de estoque');
    yield put(addProductToCartFailure(product.id));
  }

  console.log(currentQuantity);
}

export default all([
  /**
   * -- takeLatest()
   * Params: Qual action será ouvida
   *         Qual função será disparada
   */
  takeLatest(ActionTypes.addProductToCartRequest, checkProductStock)
]);
