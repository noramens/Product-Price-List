import React from "react";
import { fireEvent, render } from "@testing-library/react";
import ProductDetails from "../components/ProductDetails";

describe("Product Details Componenet", () => {
  function renderComponent(props) {
    return render(<ProductDetails {...props} />);
  }

  const props = {
    classes: {},
    openDrawer: Boolean,
    closeDrawer: jest.fn(),
    handleOpenDeleteClick: jest.fn(),
    openDeleteProductDialog: Boolean,
    handleCloseDeleteDialog: jest.fn(),
    openAddProduct: Boolean,
    setOpenAddProduct: jest.fn(),
    product: { name: "panadol", prices: [] },
  };

  it("should have a title with product name", () => {
    const { getByTestId } = renderComponent(props);
    expect(getByTestId("product-details-title")).toHaveTextContent(
      `Product Details for ${props.product.name}`
    );
  });

  it("should have the edit product button", () => {
    const { getByTestId } = renderComponent(props);
    expect(getByTestId("edit-product")).toBeTruthy();
  });

  it("should have the delete product button", () => {
    const { getByTestId } = renderComponent(props);
    expect(getByTestId("delete-product")).toBeTruthy();
  });

  it("should render the prices table", () => {
    const { getByTestId } = renderComponent(props);
    expect(getByTestId("prices-table")).toBeTruthy();
  });

  it("should have the right columns for the price table", () => {
    const { getByTestId } = renderComponent(props);
    expect(getByTestId("date-column")).toBeTruthy();
    expect(getByTestId("price-column")).toBeTruthy();
  });

  it("should close the drawer when the close button is clicked", () => {
    const { getByTestId } = renderComponent(props);
    fireEvent.click(getByTestId("close-button"));
    expect(props.closeDrawer).toBeCalled();
  });
});
