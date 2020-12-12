import { Dispatch } from "react";
import { DispatchTypes } from "../../models/types/dispatch-types";
import {
  GET_PRODUCTS_FAILED,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
} from "./types";
import axios from "axios";

const fetchProducts = () => (dispatch: Dispatch<DispatchTypes>) => {
  dispatch({
    type: GET_PRODUCTS_LOADING,
  });
  axios
    .get("products")
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
