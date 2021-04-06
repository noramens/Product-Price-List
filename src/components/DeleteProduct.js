import React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from '@material-ui/core';
import { Bolden, Button, DeleteDescription, InfoImage } from '../Styles';

export default function DeleteProduct({
  openDeleteProductDialog,
  handleCloseDeleteDialog,
  product,
  deleteProduct
}) {
  function handleDeleteProduct() {
    deleteProduct(product);
    handleCloseDeleteDialog();
  }

  return (
    <Dialog open={openDeleteProductDialog} data-testid="open" fullWidth={true}>
      <DialogContent>
        <DialogTitle data-testid="title">Delete Product</DialogTitle>
        <DeleteDescription>
          <InfoImage />
          <div data-testid="product-description">
            Are you sure you want to permanently delete
            <Bolden> {product && product.name}</Bolden>?
          </div>
        </DeleteDescription>
      </DialogContent>
      <DialogActions>
        <Button delete onClick={handleDeleteProduct}>
          Yes, Delete
        </Button>
        <Button onClick={handleCloseDeleteDialog} data-testid="close" secondary>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
