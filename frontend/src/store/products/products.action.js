import { PRODUCTS_LIST_FAILURE, PRODUCTS_LIST_REQUEST, PRODUCTS_LIST_SUCCESS } from "./products.types"

export const productsAction = () => async (dispatch) => {
    dispatch({
        type: PRODUCTS_LIST_REQUEST
    })
    
    try {
        await fetch("/api/products")
        .then(response=>response.json())
        .then(data=>{
            dispatch({
                type: PRODUCTS_LIST_SUCCESS,
                payload: data
            })
        })
    } catch (error) {
        dispatch({
            type: PRODUCTS_LIST_FAILURE,
            payload: error
        })
    }

}