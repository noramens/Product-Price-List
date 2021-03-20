import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import { Button } from "../Styles";

export default function AddProductDialog({ open, setOpen }) {
  const [values, setValues] = useState({});

  const disableAddProductButton = !values || !values.name || !values.price;

  function handleCloseClick() {
    setOpen(false);
    setValues({});
  }

  function handleChange({ target }) {
    setValues({ ...values, [target.name]: target.value });
  }

  return (
    <Dialog
      open={open}
      onClose={handleCloseClick}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Add New Product</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          name="name"
          label="Name of product"
          type="text"
          fullWidth
          onChange={handleChange}
        />
        <TextField
          autoFocus
          margin="dense"
          name="price"
          label="Price of product"
          type="number"
          fullWidth
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseClick} secondary>
          Cancel
        </Button>
        <Button
          onClick={handleCloseClick}
          disabled={disableAddProductButton}
          primary
        >
          Add Product
        </Button>
      </DialogActions>
    </Dialog>
  );
}
