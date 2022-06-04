import { all, put, call, takeEvery } from 'redux-saga/effects';
import {GET_PRODUCT, GET_PRODUCTS, setProduct, setProducts} from "../actions";
import {fetchProduct, fetchProducts} from "../services";



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


function* watchGetProducts(){
    yield takeEvery(GET_PRODUCTS, getProducts)

}

function* watchGetProduct(){
    yield takeEvery(GET_PRODUCT, getProduct)

}

export default function* rootSaga()
{
    yield all([
        watchGetProducts(),
        watchGetProduct()
    ])
}
