import React, { useState } from 'react';
import { Drawer } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import AddProduct from './AddProduct';
import DeleteProduct from './DeleteProduct';
import EditProduct from './EditProduct';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import { getFormattedDate } from '../helpers/utils';
import { AppTitleWrapper, Button, Bolden } from '../Styles';

function ProductDetails({
  classes,
  openDrawer,
  closeDrawer,
  handleOpenDeleteClick,
  openDeleteProductDialog,
  handleCloseDeleteDialog,
  openAddProduct,
  setOpenAddProduct,
  openEditProduct,
  setOpenEditProduct,
  product,
  editProduct,
  deleteProduct
}) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowPerPage] = useState(10);

  function handleChangePage(event, page) {
    setPage(page);
  }

  function handleChangeRowsPerPage(event) {
    setRowPerPage(event.target.value);
  }
  return (
    <Drawer
      classes={{ paper: classes.paper }}
      anchor="right"
      variant="temporary"
      open={openDrawer}
      onBackdropClick={closeDrawer}
      data-testid="product-details"
    >
      <aside className={classes.drawerWidth}>
        <div data-testid="product-details-title">
          Product Details for <Bolden>{product && product.name}</Bolden>
        </div>
        <div>
          <AppTitleWrapper style={{ marginTop: 40 }}>
            <Button
              primary
              onClick={() => setOpenEditProduct(true)}
              data-testid="edit-product"
            >
              Edit Product
            </Button>
            <Button
              delete
              style={{ marginLeft: 10 }}
              onClick={handleOpenDeleteClick}
              data-testid="delete-product"
            >
              Delete Product
            </Button>
          </AppTitleWrapper>
        </div>

        <TableContainer
          component={Paper}
          style={{ margin: '50px 0' }}
          data-testid="prices-table"
        >
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell data-testid="date-column">Date</TableCell>
                <TableCell align="right" data-testid="price-column">
                  Prices
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {product &&
                product.prices.map(item => (
                  <TableRow key={item.id} hover>
                    <TableCell>{getFormattedDate(item.date)}</TableCell>
                    <TableCell align="right">{item.price}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
            {product && product.prices && (
              <TableFooter>
                <TableRow>
                  <TablePagination
                    colSpan={2}
                    count={product && product.prices && product.prices.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    backIconButtonProps={{
                      'aria-label': 'Previous Page'
                    }}
                    nextIconButtonProps={{
                      'aria-label': 'Next Page'
                    }}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                  />
                </TableRow>
              </TableFooter>
            )}
          </Table>
        </TableContainer>

        <Button secondary onClick={closeDrawer} data-testid="close-button">
          Close
        </Button>
        <DeleteProduct
          openDeleteProductDialog={openDeleteProductDialog}
          handleCloseDeleteDialog={handleCloseDeleteDialog}
          product={product}
          deleteProduct={deleteProduct}
        />
        <AddProduct open={openAddProduct} setOpen={setOpenAddProduct} />
        <EditProduct
          open={openEditProduct}
          setOpen={setOpenEditProduct}
          product={product}
          editProduct={editProduct}
          closeDetailsDrawer={closeDrawer}
        />
      </aside>
    </Drawer>
  );
}

const styles = theme => ({
  drawerWidth: {
    [theme.breakpoints.only('xs')]: {
      width: '100%',
      padding: 16,
      marginBottom: 56
    },
    width: 800,
    padding: 32,
    position: 'relative'
  },
  paper: {
    [theme.breakpoints.only('xs')]: {
      width: '95%'
    }
  },
  table: {
    minWidth: '70%'
  }
});

export default withStyles(styles)(ProductDetails);
