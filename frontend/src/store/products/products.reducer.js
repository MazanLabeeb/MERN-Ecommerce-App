import {PRODUCTS_LIST_REQUEST, PRODUCTS_LIST_SUCCESS, PRODUCTS_LIST_FAILURE} from "./products.types";

const initialState = {
    products: []
}

export const productReducer = (state = initialState, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case PRODUCTS_LIST_REQUEST:
            return {
                loading: true,
                products: []
            }
        case PRODUCTS_LIST_SUCCESS:
            return {
                loading: false,
                products: payload
            }
        case PRODUCTS_LIST_FAILURE:
            return {
                loading: false,
                error: payload
            }


        default:
            return state;
    }
}