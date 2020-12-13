import {
  ProductsActionTypes,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILED,
  PRODUCT_INCREAMENT,
  PRODUCT_DECREAMENT,
} from "../actions/types";
import { ProductStateTypes } from "../../models/types/products-state-types";

const initialState: ProductStateTypes = {
  loading: true,
  status: true,
  products: [],
  product: undefined,
  quantity: 0,
};

const productsReducer = (state = initialState, action: ProductsActionTypes) => {
  switch (action.type) {
    case GET_PRODUCTS_LOADING:
      return {
        ...state,
        loading: true,
        status: null,
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload.products,
        status: action.payload.status,
      };
    case GET_PRODUCTS_FAILED:
      return {
        ...state,
        loading: false,
        products: [],
        status: false,
      };
    case PRODUCT_INCREAMENT:
      return {
        ...state,
        quantity: state.quantity + 1,
      };
    case PRODUCT_DECREAMENT:
      return {
        ...state,
        quantity: state.quantity - 1,
      };
    default:
      return state;
  }
};

export default productsReducer;
