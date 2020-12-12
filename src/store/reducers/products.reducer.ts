import {
  ProductsActionTypes,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILED,
} from "./../actions/types";
import { ProductStateTypes } from "../../models/types/products-state-types";

const initialState: ProductStateTypes = {
  loading: true,
  status: true,
  products: [],
  product: undefined,
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
    default:
      return state;
  }
};

export default productsReducer;
