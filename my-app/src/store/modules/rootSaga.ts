/**
 * Unir vários sagas dentro de um único script
 */
import { all } from 'redux-saga/effects';

import cart from './cart/sagas';

/**
 * function* é um generator, ou uma função assíncrona
 * function* == async function
 */
export default function* rootSaga() {
  // -- yield é como no c#.
  // -- Aguarda o código finalizar antes de passar para a próxima linha
  return yield all([
    cart,
  ]);
}