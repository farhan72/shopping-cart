import { Products } from "../../models/response/products";

export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const GET_PRODUCTS_LOADING = "GET_PRODUCTS_LOADING";
export const GET_PRODUCTS_FAILED = "GET_PRODUCTS_FAILED";
export const PRODUCT_INCREAMENT = "PRODUCT_INCREAMENT";
export const PRODUCT_DECREAMENT = "PRODUCT_DECREAMENT";

interface ProductResult {
  products: Products[];
  status: number | boolean;
}

interface GetProductsSuccessAction {
  type: typeof GET_PRODUCTS_SUCCESS;
  payload: ProductResult;
}

interface GetProductsLoadingAction {
  type: typeof GET_PRODUCTS_LOADING;
}

interface GetProductsFailedAction {
  type: typeof GET_PRODUCTS_FAILED;
  payload: {
    error: string;
  };
}

interface increament {
  type: typeof PRODUCT_INCREAMENT;
  count: number;
}

interface decreament {
  type: typeof PRODUCT_DECREAMENT;
  count: number;
}

export type ProductsActionTypes =
  | GetProductsFailedAction
  | GetProductsLoadingAction
  | GetProductsSuccessAction
  | increament
  | decreament;
