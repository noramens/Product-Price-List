import React from "react";
import { render } from "@testing-library/react";
import ProductListTable from "../components/ProductListTable";

describe("Product List Table Component", () => {
  function renderComponent(props) {
    return render(<ProductListTable {...props} />);
  }

  const props = {
    data: [],
    openAddProduct: Boolean,
    setOpenAddProduct: jest.fn(),
  };

  it("should render a table", () => {
    const { getByTestId } = renderComponent(props);
    expect(getByTestId("table")).toBeTruthy();
  });

  it("should have render the right columns", () => {
    const { getByTestId } = renderComponent(props);
    expect(getByTestId("product-name-column")).toBeTruthy();
    expect(getByTestId("latest-price-column")).toBeTruthy();
  });
});
