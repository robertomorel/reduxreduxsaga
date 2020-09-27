import React from 'react';
import Cart from '../../components/Cart';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import getCarts from '../../utils/mocks/getCarts.json';

const mockUseSelector = useSelector as jest.Mock;

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
}));

describe('Cart component', () => {
  /*
    beforeEach(() => {
    mockUseSelector.mockImplementation(() => getCarts);
    });
    afterEach(() => {
      mockUseSelector.mockClear();
    });
  */
  beforeAll(() => {
    mockUseSelector.mockImplementation(() => getCarts);
  })
  
  it('should render the Cart component correctly', () => {
    const { getByTestId } = render(
      <Cart />,
    );

    expect(getByTestId('cart-container')).toBeTruthy();
  });

  it('should be able to render the table header', () => {
    const { getByText } = render(
      <Cart />,
    );

    expect(getByText('Produto')).toBeTruthy();
    expect(getByText('Preço')).toBeTruthy();
    expect(getByText('Quantidade')).toBeTruthy();
    expect(getByText('Subtotal')).toBeTruthy();
  });

  it('should be able to render the carts details', () => {
    const { getByText } = render(
      <Cart />,
    );

    expect(getByText('Casaco maneiro')).toBeTruthy();
    expect(getByText('290.9')).toBeTruthy();
    expect(getByText('Tênis da moda')).toBeTruthy();
    expect(getByText('500')).toBeTruthy();
  });
});