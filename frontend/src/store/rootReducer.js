import { combineReducers } from "redux";
import productDetailReducer from "./product-detail/product-detail.reducer";
import { productReducer } from "./products/products.reducer";

export const rootReducer = combineReducers({
    productsStore: productReducer,
    productDetailStore: productDetailReducer
});