import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ProductDetails from "./ProductDetails";

export default function ProductListTable({
  data,
  openAddProduct,
  setOpenAddProduct,
}) {
  const [openDeleteProductDialog, setOpenDeleteProductDialog] = useState(false);
  const [detailsDrawerOpen, setDetailsDrawerOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);

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
  }

  function latestDate(prices) {
    const allPrices = [];
    prices.forEach((item) => allPrices.push(item.price));
    return Math.max(...allPrices);
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell align="right">Latest Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data &&
            data.map((product) => (
              <TableRow
                key={product.id}
                hover
                onClick={() => handleRowClick(product)}
              >
                <TableCell>{product.name}</TableCell>
                <TableCell align="right">
                  {latestDate(product.prices)}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <ProductDetails
        openDrawer={detailsDrawerOpen}
        closeDrawer={handleCloseDetailsDrawer}
        openDeleteProductDialog={openDeleteProductDialog}
        handleOpenDeleteClick={handleOpenDeleteClick}
        handleCloseDeleteDialog={handleCloseDeleteDialog}
        openAddProduct={openAddProduct}
        setOpenAddProduct={setOpenAddProduct}
        product={selectedRowData}
      />
    </TableContainer>
  );
}
