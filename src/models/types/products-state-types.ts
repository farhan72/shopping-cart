import { Products } from "../response/products";
export interface ProductStateTypes {
  loading: boolean;
  status: boolean;
  products?: Products[];
  product?: Products;
  quantity: number;
}
