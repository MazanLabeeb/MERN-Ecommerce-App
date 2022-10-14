import { PRODUCTS_LIST_FAILURE, PRODUCTS_LIST_REQUEST, PRODUCTS_LIST_SUCCESS } from "./products.types"
import axios from "axios";

const productsAction = () => async (dispatch) => {
    dispatch({
        type: PRODUCTS_LIST_REQUEST
    })
    
    try {
        let {data} = await axios.get('/api/products');
        dispatch({
            type: PRODUCTS_LIST_SUCCESS,
            payload: data
        }) 
         
        
    } catch (error) {
        
        dispatch({
            type: PRODUCTS_LIST_FAILURE,
            payload: error.response.data &&  error.response.data.message
        })
        
    }




}

export default productsAction;

// dispatch({
//     type: PRODUCTS_LIST_FAILURE,
//     payload: error
// })