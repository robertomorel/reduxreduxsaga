import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { IState } from '../store';
import { ICartItem } from '../store/modules/cart/types';

const Total: React.FC = () => {
  const [total, setTotal] =  useState('');
  const cart = useSelector<IState, ICartItem[]>(state => state.cart.items);
  
  const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

  const handleCartTotal = () => {
    const count = cart.reduce((prev, cur) => {
      return prev + cur.product.price * cur.quantity;
    }, 0);
    setTotal(formatValue(count));
  }

  const handleCartTotal2 = () => {
    let count = 0;
    cart.forEach(item => {
      count += item.product.price * item.quantity;
    });
    setTotal(formatValue(count));
  }

  return (
    <footer
      data-testid='total-container'
    >
      <h3>Total</h3>

      <button 
        type='button'
        onClick={handleCartTotal}
        placeholder='Calcular'
      >
        Calcular
      </button>

      <span>  {total}</span>
    </footer>
  );
}

export default Total;