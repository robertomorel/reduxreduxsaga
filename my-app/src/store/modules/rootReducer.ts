/**
 * Unir vários reducers dentro de um único 
 * estado disponível na aplicação
 */
import { combineReducers } from "redux";
import cart from './cart/reducer';
import user from './user/reducer';

export default combineReducers({
  cart,
  user,
})