import React from 'react';
import Catalog from '../components/Catalog';
import Cart from '../components/Cart';
import Total from '../components/Total';

const Home: React.FC = () => {
  return (
    <>
    <Catalog />
    <Cart />
    <Total />
    </>
  );
}

export default Home;