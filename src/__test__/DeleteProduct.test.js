import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import DeleteProduct from '../components/DeleteProduct';

describe('Delete Product Component', () => {
  function renderComponent(props) {
    return render(<DeleteProduct {...props} />);
  }

  const props = {
    openDeleteProductDialog: Boolean,
    handleCloseDeleteDialog: jest.fn(),
    product: {
      name: 'panadol'
    }
  };

  it('should open the dialog', () => {
    const { getByTestId } = renderComponent(props);
    expect(getByTestId('open')).toBeTruthy();
  });

  it('should render the title of the Dialog', () => {
    const { getByTestId } = renderComponent(props);
    expect(getByTestId('title')).toHaveTextContent('Delete Product');
  });

  it('should have the right description of product', () => {
    const { getByTestId } = renderComponent(props);
    expect(getByTestId('product-description')).toHaveTextContent(
      `Are you sure you want to permanently delete ${props.product.name}?`
    );
  });

  it('should close modal when canceled button is clicked', () => {
    const { getByTestId } = renderComponent(props);
    fireEvent.click(getByTestId('close'));
    expect(props.handleCloseDeleteDialog).toBeCalled();
  });
});
