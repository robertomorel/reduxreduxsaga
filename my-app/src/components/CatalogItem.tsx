import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../store';
import { addProductToCartRequest } from '../store/modules/cart/actions';
import { IProduct } from '../store/modules/cart/types';

interface ICatalogItemProps {
  product: IProduct;
}

const CatalogItem: React.FC<ICatalogItemProps> = ({ product }) => {
  //console.log(JSON.stringify(product, null, 2));
  const dispatch = useDispatch();
  const hasFailedStockCheck = useSelector<IState, boolean>(state => {
    return state.cart.failedStockCheck.includes(product.id);
  });
  
  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCartRequest(product));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, product]);
  
  return (
    <article
      data-testid="catalog-item-container"
    >
      <strong>{product.title}</strong> {" - "}
      <span>{product.price}</span> {"  "}

      <button 
        type="button"
        onClick={handleAddProductToCart}
        placeholder='Comprar'
      >
        Comprar
      </button>

      {hasFailedStockCheck && <span style={{ color: 'red' }}>  Falta de estoque</span>}
    </article>
  );
}

export default CatalogItem;