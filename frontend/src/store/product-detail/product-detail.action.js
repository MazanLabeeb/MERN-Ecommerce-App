import axios from "axios";
import { PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_SUCCESS,PRODUCT_DETAIL_FAILURE } from "./product-detail.types";

const productDetailAction = (id) => async (dispatch) => {
    dispatch({
        type: PRODUCT_DETAIL_REQUEST,
        payload: {}
    })

    try {
        let {data} = await axios.get(`/api/products/${id}`);
        dispatch({
            type: PRODUCT_DETAIL_SUCCESS,
            payload : data
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAIL_FAILURE,
            payload: error.response && error.response.data.message
        })
    }
}

export default productDetailAction;