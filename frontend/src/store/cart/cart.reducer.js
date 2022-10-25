import { ADD_TO_CART, DECREMENT_TO_CART, INCREMENT_TO_CART, REMOVE_FROM_CART } from "./cart.types";

const initialState = [];

const CartReducer = (currentState = initialState, action) => {

    const { type, payload } = action;
    switch (type) {
        case ADD_TO_CART:
            return [
                ...payload
            ]
            break;

        case INCREMENT_TO_CART:
            return currentState.map(item => {
                if (item._id === payload) {
                    item.qty = item.qty + 1;
                }
                return item;
            })

            break;

        case DECREMENT_TO_CART:
            return currentState.map(item => {
                if (item._id === payload) {
                    if (item.qty <= 1) {
                        return null;
                    }
                    item.qty = item.qty - 1;
                }
                return item;
            }).filter(Boolean);

            break;

        case REMOVE_FROM_CART:
            return currentState.filter(item=> item._id !== payload);

        break;

        default:
            return currentState;
    }
}

export default CartReducer;