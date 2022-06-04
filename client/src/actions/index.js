export const SET_PRODUCTS="SET_PRODUCTS"
export const GET_PRODUCTS="GET_PRODUCTS"
export const SET_PRODUCT="SET_PRODUCT"
export const GET_PRODUCT="GET_PRODUCT"


export function getProducts(search, type){
    return {
        type: GET_PRODUCTS,
        payload: {
            search,
            type
        }
    }

}


export function setProducts(products){
    return {
        type: SET_PRODUCTS,
        payload: products

    }
}


export function getProduct(id){
    return {
        type: GET_PRODUCT,
        payload: {id}
    }

}


export function setProduct(product){
    return {
        type: SET_PRODUCT,
        payload: product

    }
}


