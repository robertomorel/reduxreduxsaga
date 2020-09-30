import React from 'react';
import { render } from '@testing-library/react';
import Catalog from '../../components/Catalog';

describe('CatalogItem component', () => {

  it('should render the Catalog component correctly', () => {
    //const useEffectSpy = jest.spyOn(Catalog.prototype, 'findCatalog');

    const { getByTestId } = render(
      <Catalog />,
    );

    expect(getByTestId('catalog-container')).toBeTruthy();
    //expect(useEffectSpy).toBeCalled();
  });
});