import { ADD_TO_CART } from "./cart.types";

const CartAction = (action) => async (dispatch, getState) => {
    const { cartStore } = getState();
    console.log(cartStore);

    let { type, payload } = action;


    const productAlreadyExists = cartStore.find(item => item._id === payload._id);
    if(productAlreadyExists){
        productAlreadyExists.qty = payload.qty + productAlreadyExists.qty;
        dispatch({
            type,
            payload: [...cartStore]
        })
    }else{
        dispatch({
            type,
            payload: [...cartStore, payload]
        })
    }
    

}

export default CartAction;