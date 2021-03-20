import React from "react";
import { Drawer } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { AppTitleWrapper, Button, Bolden } from "../Styles";
import AddProduct from "./AddProduct";
import DeleteProduct from "./DeleteProduct";

function createData(date, price) {
  return { date, price };
}

const rows = [
  createData("2018/11/02", 159),
  createData("2019/11/02", 237),
  createData("2018/05/02", 262),
];

function ProductDetails({
  classes,
  openDrawer,
  closeDrawer,
  handleOpenDeleteClick,
  openDeleteProductDialog,
  handleCloseDeleteDialog,
  openAddProduct,
  setOpenAddProduct,
  product,
}) {
  return (
    <Drawer
      classes={{ paper: classes.paper }}
      anchor="right"
      variant="temporary"
      open={openDrawer}
      onBackdropClick={closeDrawer}
      ModalProps={{
        BackdropProps: {
          classes: { root: classes.backdrop },
        },
      }}
    >
      <aside className={classes.drawerWidth}>
        <div>
          Product Details for <Bolden>{product && product.name}</Bolden>
        </div>
        <div>
          <AppTitleWrapper style={{ marginTop: 40 }}>
            <Button primary onClick={() => setOpenAddProduct(true)}>
              Edit Product
            </Button>
            <Button
              delete
              style={{ marginLeft: 10 }}
              onClick={handleOpenDeleteClick}
            >
              Delete Product
            </Button>
          </AppTitleWrapper>
        </div>

        <TableContainer component={Paper} style={{ margin: "50px 0" }}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell align="right">Prices</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {product &&
                product.prices.map((item) => (
                  <TableRow key={item.id} hover>
                    <TableCell>{item.date}</TableCell>
                    <TableCell align="right">{item.price}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Button secondary onClick={closeDrawer}>
          Close
        </Button>
        <DeleteProduct
          openDeleteProductDialog={openDeleteProductDialog}
          handleCloseDeleteDialog={handleCloseDeleteDialog}
          productName={product && product.name}
        />
        <AddProduct open={openAddProduct} setOpen={setOpenAddProduct} />
      </aside>
    </Drawer>
  );
}

const styles = (theme) => ({
  drawerWidth: {
    [theme.breakpoints.only("xs")]: {
      width: "100%",
      padding: 16,
      marginBottom: 56,
    },
    width: 800,
    padding: 32,
    position: "relative",
  },
  paper: {
    [theme.breakpoints.only("xs")]: {
      width: "95%",
    },
  },
  backdrop: {
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  table: {
    minWidth: "70%",
  },
});

export default withStyles(styles)(ProductDetails);
