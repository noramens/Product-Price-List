import React, { useState, useEffect } from 'react';
import AddProduct from './components/AddProduct';
import ProductListTable from './components/ProductListTable';
import { Container, AppTitleWrapper, Button } from './Styles';

export default function ProductPriceList({
  fetchPriceList,
  addProduct,
  loading,
  data,
  errorMessage,
  editProduct,
  deleteProduct
}) {
  const [openAddProduct, setOpenAddProduct] = useState(false);

  function handleAddProductOpen() {
    setOpenAddProduct(true);
  }

  useEffect(() => {
    fetchPriceList();
  }, [fetchPriceList]);

  return (
    <Container>
      <AppTitleWrapper>
        <h1>Product Price List</h1>
        <Button primary onClick={handleAddProductOpen}>
          Add new product
        </Button>
      </AppTitleWrapper>

      <ProductListTable
        data={data}
        openAddProduct={openAddProduct}
        setOpenAddProduct={setOpenAddProduct}
        editProduct={editProduct}
        deleteProduct={deleteProduct}
        loading={loading}
      />

      <AddProduct
        open={openAddProduct}
        setOpen={setOpenAddProduct}
        addProduct={addProduct}
      />
    </Container>
  );
}
