import { combineReducers } from "redux";
import { productReducer } from "./products/products.reducer";

export const rootReducer = combineReducers({
    productsStore: productReducer
});