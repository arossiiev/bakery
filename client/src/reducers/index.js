import {
    ADD_TOAST,
    CLEAR_TOAST,
    SET_CART,
    SET_CURRENT_USER,
    SET_PRODUCT,
    SET_PRODUCTS,
    SET_USER_ORDERS
} from "../actions";
import {combineReducers} from "redux";


function productReducer(state={products: null, current: null}, action){
    let tmp;
    switch (action.type){
        case SET_PRODUCTS:
            tmp = {...state};

            tmp.products = action.payload;

            return tmp;

        case SET_PRODUCT:
            tmp = {...state};

            tmp.current = action.payload;

            return tmp;
        default:
            return state;

    }

}

function cartReducer(state=[], action){
    let tmp;
    switch (action.type){
        case SET_CART:
            tmp = action.payload


            return tmp;
        default:
            return state;

    }


}


function toastsReducer(state=null, action) {
    switch (action.type)  {
        case ADD_TOAST:
            return action.payload;
        case CLEAR_TOAST:
            return null;

        default:
            return state;
    }
}

function userReducer(state={user:null, orders:[]}, action) {
    let tmp;
    switch (action.type)  {
        case SET_CURRENT_USER:
            tmp = {...state};
            tmp.user = action.payload
            return tmp;

        case SET_USER_ORDERS:
            tmp = {...state};
            tmp.orders = action.payload.orders
            return tmp;


        default:
            return state;
    }
}


const reducer = combineReducers({
        products: productReducer,
        cart: cartReducer,
        toast: toastsReducer,
        user: userReducer
    }

)

export default reducer;