import { all, put, call, takeEvery } from 'redux-saga/effects';
import {
    ADD_TO_CART, addToast, CHECKOUT,
    GET_CART,
    GET_PRODUCT,
    GET_PRODUCTS,
    REMOVE_FROM_CART,
    setCart,
    setProduct,
    setProducts
} from "../actions";
import {
    addToCartProduct,
    checkoutService,
    fetchCart,
    fetchProduct,
    fetchProducts,
    removeFromCartProduct
} from "../services";



function* getProducts(action){
    try{
        const {data} = yield call(fetchProducts, action.payload);
        yield put(setProducts(data));
    }catch(e){}

}

function* getProduct(action){
    try{
        const {data} = yield call(fetchProduct, action.payload);
        yield put(setProduct(data));
    }catch(e){}

}


function* addToCartSaga(action){
    try{
        const {data} = yield call(addToCartProduct, action.payload);

        yield put(setCart(data));
    }catch(e){
        console.log(e)

    }

}


function* removeFromCartSaga(action){
    try{
        const {data} = yield call(removeFromCartProduct, action.payload);


        yield put(setCart(data));
    }catch(e){}

}

function* getCartSaga(action){
    try{
        const {data} = yield call(fetchCart);
        yield put(setCart(data));
    }catch(e){}

}

function* checkoutSaga(action){
    try{
        const {data} = yield call(checkoutService,
            action.payload.first_name,
            action.payload.second_name,
            action.payload.phone,
            action.payload.mail);


        yield put(addToast("success", "Замовлення оформлено!"));


    }catch(e){

        yield put(addToast("error", JSON.parse(e.request.response).message));
    }
}



function* watchGetProducts(){
    yield takeEvery(GET_PRODUCTS, getProducts)

}

function* watchGetProduct(){
    yield takeEvery(GET_PRODUCT, getProduct)

}


function* watchGetCart(){
    yield takeEvery(GET_CART, getCartSaga)

}


function* watchAddToCartProduct(){
    yield takeEvery(ADD_TO_CART, addToCartSaga)

}

function* watchRemoveFromCartProduct(){
    yield takeEvery(REMOVE_FROM_CART, removeFromCartSaga)

}

function* watchCheckout(){
    yield takeEvery(CHECKOUT, checkoutSaga)

}

export default function* rootSaga()
{
    yield all([
        watchGetProducts(),
        watchGetProduct(),
        watchAddToCartProduct(),
        watchRemoveFromCartProduct(),
        watchGetCart(),
        watchCheckout()
    ])
}
