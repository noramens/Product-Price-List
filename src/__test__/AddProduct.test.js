import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import AddProduct from "../components/AddProduct";

const props = {
  open: Boolean,
  setOpen: jest.fn(),
};

describe("Add Products Component", () => {
  function renderAddProduct(props) {
    return render(<AddProduct {...props} />);
  }

  it("should open the dialog", () => {
    const { getByTestId } = renderAddProduct(props);
    expect(getByTestId("open")).toBeTruthy();
  });

  it("should render the dialog title", () => {
    const { getByTestId } = renderAddProduct(props);
    expect(getByTestId("title")).toHaveTextContent(/Add New Product/);
  });

  it("should accept only text for the name of product field", () => {
    const { getByTestId } = renderAddProduct(props);
    expect(getByTestId("product_name")).toHaveAttribute("type", "text");
  });

  it("should accept only numbers for the Price field", () => {
    const { getByTestId } = renderAddProduct(props);
    expect(getByTestId("price")).toHaveAttribute("type", "number");
  });

  it("should have Add Product button disabled when there are no values", () => {
    const newProps = {
      ...props,
      values: {},
    };
    const { getByTestId } = renderAddProduct(newProps);
    expect(getByTestId("add-product-button")).toHaveAttribute("disabled");
  });
});
