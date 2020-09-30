import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { IProduct } from '../store/modules/cart/types';
import CatalogItem from './CatalogItem';

const Catalog: React.FC = () => {
  /*
  const store = useStore();
  const state = useSelector(state => state);
  const email = useSelector(state => state.email);

  //console.log(store.getState());
  //console.log(state);
  */
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get('products').then(response => {
      setCatalog(response.data);
    })
  }, [catalog]);

  return (
    <main
      data-testid="catalog-container"
    >
    <h1>Catalog</h1>

    {catalog.map(product => (
      <CatalogItem 
        key={product.id}
        product={product} 
      />
    ))}
    </main>
  );
}

export default Catalog;