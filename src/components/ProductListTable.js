import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import ProductDetails from './ProductDetails';
import { getLatestDate } from '../helpers/utils';

export default function ProductListTable({
  data = [],
  openAddProduct,
  setOpenAddProduct,
  editProduct,
  deleteProduct,
  loading
}) {
  const [openDeleteProductDialog, setOpenDeleteProductDialog] = useState(false);
  const [detailsDrawerOpen, setDetailsDrawerOpen] = useState(false);
  const [openEditProduct, setOpenEditProduct] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowPerPage] = useState(10);

  function handleRowClick(product) {
    setDetailsDrawerOpen(true);
    setSelectedRowData(product);
  }

  function handleCloseDetailsDrawer() {
    setDetailsDrawerOpen(false);
  }

  function handleOpenDeleteClick() {
    setOpenDeleteProductDialog(true);
  }

  function handleCloseDeleteDialog() {
    setOpenDeleteProductDialog(false);
    setDetailsDrawerOpen(false);
  }

  function handleChangePage(event, page) {
    setPage(page);
  }

  function handleChangeRowsPerPage(event) {
    setRowPerPage(event.target.value);
  }

  return (
    <TableContainer component={Paper}>
      <Table data-testid="table">
        <TableHead>
          <TableRow>
            <TableCell data-testid="product-name-column">
              Product Name
            </TableCell>
            <TableCell align="right" data-testid="latest-price-column">
              Latest Price
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!loading &&
            data &&
            data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(product => (
                <TableRow
                  key={product.id}
                  hover
                  onClick={() => handleRowClick(product)}
                >
                  <TableCell>{product.name}</TableCell>
                  <TableCell align="right">
                    {getLatestDate(product.prices)}
                  </TableCell>
                </TableRow>
              ))}
        </TableBody>

        {data && (
          <TableFooter>
            <TableRow>
              <TablePagination
                colSpan={2}
                rowsPerPageOptions={[5, 10, 25]}
                count={data.length}
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

      <ProductDetails
        openDrawer={detailsDrawerOpen}
        closeDrawer={handleCloseDetailsDrawer}
        openDeleteProductDialog={openDeleteProductDialog}
        handleOpenDeleteClick={handleOpenDeleteClick}
        handleCloseDeleteDialog={handleCloseDeleteDialog}
        openAddProduct={openAddProduct}
        setOpenAddProduct={setOpenAddProduct}
        openEditProduct={openEditProduct}
        setOpenEditProduct={setOpenEditProduct}
        product={selectedRowData}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        editProduct={editProduct}
        deleteProduct={deleteProduct}
      />
    </TableContainer>
  );
}
