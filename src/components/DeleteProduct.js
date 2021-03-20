import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import { Button, DeleteDescription, InfoImage, Bolden } from "../Styles";

export default function DeleteProduct({
  openDeleteProductDialog,
  handleCloseDeleteDialog,
  productName,
}) {
  return (
    <Dialog open={openDeleteProductDialog} fullWidth={true}>
      <DialogContent>
        <DialogTitle>Delete Product</DialogTitle>
        <DeleteDescription>
          <InfoImage />
          <div>
            {" "}
            Are you sure you want to permanently delete{" "}
            <Bolden> {productName}</Bolden>?{" "}
          </div>
        </DeleteDescription>
      </DialogContent>
      <DialogActions>
        <Button delete>Yes, Delete</Button>
        <Button onClick={handleCloseDeleteDialog} secondary>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
