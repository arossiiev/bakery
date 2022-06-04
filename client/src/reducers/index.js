import {SET_PRODUCT, SET_PRODUCTS} from "../actions";
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


const reducer = combineReducers({
        products: productReducer
    }

)

export default reducer;