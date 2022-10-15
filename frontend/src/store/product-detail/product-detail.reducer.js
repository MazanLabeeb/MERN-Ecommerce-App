import { PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_FAILURE, PRODUCT_DETAIL_SUCCESS } from "./product-detail.types";
const initialState = {
    loading: true,
    product : {}
};

const productDetailReducer = (currentState = initialState, action = {}) => {
    const { type, payload } = action;
    switch (type) {
        case PRODUCT_DETAIL_REQUEST:
            return {
                loading: true,
                product: {}
            }

        case PRODUCT_DETAIL_SUCCESS:
            return {
                loading: false,
                product: payload
            }
        case PRODUCT_DETAIL_FAILURE:
            return {
                loading: false,
                error: payload,
                product: {}
            }

        default:
            return currentState;
    }
}

export default productDetailReducer;