import ProductPriceList from '../ProductPriceList';
import { connect } from 'react-redux';
import {
  fetchPriceList,
  addProduct,
  editProduct,
  deleteProduct
} from './ProductPriceListActions';

const mapStateToProps = ({ loading, errorMesage, data }) => {
  return { loading, errorMesage, data };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPriceList: () => dispatch(fetchPriceList()),
    addProduct: product => dispatch(addProduct(product)),
    editProduct: payload => dispatch(editProduct(payload)),
    deleteProduct: product => dispatch(deleteProduct(product))
  };
};

export const ProductPriceListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductPriceList);
