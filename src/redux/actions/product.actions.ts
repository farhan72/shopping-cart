import { ProductsRequest } from "../../models/request/products-request";
import { Dispatch } from "react";
import { DispatchTypes } from "../../models/types/dispatch-types";
import {
  GET_PRODUCTS_FAILED,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
} from "./types";
import axios from "axios";

const fetchProducts = (request: ProductsRequest) => (
  dispatch: Dispatch<DispatchTypes>
) => {
  dispatch({
    type: GET_PRODUCTS_LOADING,
  });
  const url = new URLSearchParams("products");
  Object.keys(request).map((key) => url.set(key, request[key]));
  axios
    .get(url.toString().replace(/=&/, "?"))
    .then((result) => {
      dispatch({
        type: GET_PRODUCTS_SUCCESS,
        payload: {
          products: result.data,
          status: result.status,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_PRODUCTS_FAILED,
        payload: error,
      });
    });
};

export { fetchProducts };
