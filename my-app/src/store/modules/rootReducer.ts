/**
 * Unir vários reducers dentro de um único 
 * estado disponível na aplicação
 */
import { combineReducers } from "redux";
import cart from './cart/reducer';

export default combineReducers({
  cart,
})