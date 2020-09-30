import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import Total from '../../components/Total';
import { useSelector } from 'react-redux';
import getCarts from '../../utils/mocks/getCarts.json';

const mockUseSelector = useSelector as jest.Mock;

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
}));

describe('CatalogItem component', () => {
  beforeAll(() => {
    mockUseSelector.mockImplementation(() => getCarts);
  })

  it('should render the Total component correctly', () => {
    const { getByTestId } = render(
      <Total />,
    );

    expect(getByTestId('total-container')).toBeTruthy();
  });

  it('should be able to click on Calcular button and handle it correctly', () => {
    const { getByPlaceholderText } = render(
      <Total />,
    )

    const buttonElement = getByPlaceholderText('Calcular');
    
    expect(fireEvent.click(buttonElement)).toBeTruthy();
  });

  it('should be able to calculate and render total price', async () => {
    const spy = jest.spyOn(Intl, 'NumberFormat');

    const { getByPlaceholderText, getByText } = render(
      <Total />,
    )

    act(() => {
      fireEvent.click(getByPlaceholderText('Calcular'));
    });

    expect(getByText('R$ 1,081.80')).toBeTruthy();
    expect(spy).toBeCalled();
    expect(spy).toBeCalledTimes(1);
  });
});