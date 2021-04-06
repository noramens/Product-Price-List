import React, { useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from '@material-ui/core';
import { Button } from '../Styles';
import TextField from '@material-ui/core/TextField';
import { getNewDate } from '../helpers/utils';

export default function EditProduct({
  open,
  setOpen,
  product,
  editProduct,
  closeDetailsDrawer
}) {
  const [values, setValues] = useState({});

  function handleCloseClick() {
    setOpen(false);
    setValues({});
  }

  function handleAddProductClick() {
    const date = new Date();
    const payload = {
      id: product.id,
      prices: {
        id: date.getTime(),
        price: parseInt(values.price),
        date: getNewDate()
      }
    };
    editProduct(payload);
    handleCloseClick();
    closeDetailsDrawer();
  }

  function handleChange({ target }) {
    setValues({ [target.name]: target.value });
  }
  return (
    <Dialog open={open} data-testid="open" fullWidth={true}>
      <DialogContent>
        <DialogTitle data-testid="edit-title">
          Edit {product && product.name}
        </DialogTitle>
        <TextField
          autoFocus
          margin="dense"
          name="price"
          label="Add new price"
          type="number"
          fullWidth
          onChange={handleChange}
          inputProps={{
            'data-testid': 'price-field'
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleAddProductClick} disabled={!values} primary>
          Edit Product
        </Button>
        <Button onClick={handleCloseClick} data-testid="close-button" secondary>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
