import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { IProduct } from '../store/modules/cart/types';
import CatalogItem from './CatalogItem';
import { IUser } from '../store/modules/user/types';
import { useSelector } from 'react-redux';

const Catalog: React.FC = () => {
  /*
  const store = useStore();
  const state = useSelector(state => state);
  const email = useSelector(state => state.email);

  //console.log(store.getState());
  //console.log(state);
  */
  const [catalog, setCatalog] = useState<IProduct[]>([]);
  const [user, setUser] = useState<IUser>();
  const cachedUser = useSelector<IUser, String>(state => state.name);

  const findCatalog = () => {
    api.get('products').then(response => {
      setCatalog(response.data);
    });
  }

  useEffect(() => {
    findCatalog();
  }, []);

  const findUser = () => {
    
    api.get('products').then(response => {
      setCatalog(response.data);
    });
  }

  useEffect(() => {
    findCatalog();
  }, []);

  console.log(JSON.stringify(catalog, null, 2));

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