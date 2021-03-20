import React, { useState, useEffect } from "react";
import AddProduct from "./components/AddProduct";
import fetchPriceList from "./fetchPriceList";
import ProductListTable from "./components/ProductListTable";
import { Container, AppTitleWrapper, Button } from "./Styles";

export default function App() {
  const [openAddProduct, setOpenAddProduct] = useState(false);
  const [data, setData] = useState(null);

  function handleAddProductOpen() {
    setOpenAddProduct(true);
  }

  useEffect(() => {
    fetchPriceList(setData);
  }, []);

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
      />
      <AddProduct open={openAddProduct} setOpen={setOpenAddProduct} />
    </Container>
  );
}
