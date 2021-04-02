import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import { Button } from '../Styles';
import { getNewDate } from '../helpers/utils';

export default function AddProductDialog({ open, setOpen, addProduct }) {
  const [values, setValues] = useState({});

  const disableAddProductButton = !values || !values.name || !values.price;

  function handleCloseClick() {
    setOpen(false);
    setValues({});
  }

  function handleChange({ target }) {
    setValues({ ...values, [target.name]: target.value });
  }

  function handleAddProductClick() {
    const id = new Date().getTime();
    const payload = {
      id: id,
      name: values.name,
      prices: [{ date: getNewDate(), id: id, price: values.price }]
    };
    addProduct(payload);
    handleCloseClick();
  }

  return (
    <Dialog
      open={open}
      onClose={handleCloseClick}
      aria-labelledby="form-dialog-title"
      data-testid="open"
    >
      <DialogTitle data-testid="title">Add New Product</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          name="name"
          label="Name of product"
          type="text"
          fullWidth
          onChange={handleChange}
          inputProps={{
            'data-testid': 'product_name',
            type: 'text'
          }}
        />
        <TextField
          autoFocus
          margin="dense"
          name="price"
          label="Price of product"
          type="number"
          fullWidth
          onChange={handleChange}
          inputProps={{
            'data-testid': 'price'
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseClick} secondary>
          Cancel
        </Button>
        <Button
          data-testid="add-product-button"
          onClick={handleAddProductClick}
          disabled={disableAddProductButton}
          primary
        >
          Add Product
        </Button>
      </DialogActions>
    </Dialog>
  );
}
