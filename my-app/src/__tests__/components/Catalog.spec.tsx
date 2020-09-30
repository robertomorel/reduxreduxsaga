import React from 'react';
import { render } from '@testing-library/react';
import Catalog from '../../components/Catalog';

describe('CatalogItem component', () => {

  it('should render the CatalogItem component correctly', async () => {
    const { getByTestId } = render(
      <Catalog />,
    );

    expect(getByTestId('catalog-container')).toBeTruthy();
  });
});