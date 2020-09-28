import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import CatalogItem from '../../components/CatalogItem';

const mockUseSelector = useSelector as jest.Mock;
const mockUseDispatch = jest.fn();

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockUseDispatch,
}));

const product = {
  "id": 1,
  "title": "Casaco maneiro",
  "price": 290.9
};

describe('CatalogItem component', () => {
  beforeEach(() => {
    mockUseSelector.mockClear();
  });

  it('should render the CatalogItem component correctly', () => {
    const { getByTestId } = render(
      <CatalogItem 
        product={product} 
      />,
    );

    expect(getByTestId('catalog-item-container')).toBeTruthy();
  });

  it('should be able to show a product detail', () => {
    const { getByText } = render(
      <CatalogItem 
        product={product} 
      />,
    );

    expect(getByText('Casaco maneiro')).toBeTruthy();
    expect(getByText('290.9')).toBeTruthy();
  });

  it('should be able to show a product detail with error', () => {
    mockUseSelector.mockImplementation(() => true);

    const { getByText } = render(
      <CatalogItem 
        product={product} 
      />,
    );

    expect(getByText('Falta de estoque')).toBeTruthy();
  });

  /*
  it('should be able to click on Comprar button and handle it correctly', () => {
    const mockedDispatch = jest.fn();
    useDispatch.mockReturnValue(mockedDispatch);

    const { getByPlaceholderText } = render(
      <CatalogItem 
        product={product} 
      />,
    )

    const spy = jest.spyOn(React, 'useCallback');

    const inputElement = getByPlaceholderText('Comprar');
    fireEvent.click(inputElement);

    expect(spy).toHaveBeenCalledTimes(1);
  });
  */
});