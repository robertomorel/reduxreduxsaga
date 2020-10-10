import React from 'react';
import Catalog from '../components/Catalog';
import Cart from '../components/Cart';
import Total from '../components/Total';
import { useDispatch } from 'react-redux';

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