export const SET_PRODUCTS="SET_PRODUCTS"
export const GET_PRODUCTS="GET_PRODUCTS"
export const SET_PRODUCT="SET_PRODUCT"
export const GET_PRODUCT="GET_PRODUCT"
export const ADD_TO_CART="ADD_TO_CART"
export const REMOVE_FROM_CART="REMOVE_FROM_CART"
export const SET_CART="SET_CART"
export const GET_CART="GET_CART"
export const CHECKOUT="CHECKOUT"
export const REGISTRATE="REGISTRATE"
export const LOGIN="LOGIN"
export const GET_CURRENT_USER="GET_CURRENT_USER"
export const SET_CURRENT_USER="SET_CURRENT_USER"
export const GET_USER_ORDERS="GET_USER_ORDERS"
export const SET_USER_ORDERS="SET_USER_ORDERS"

export const ADD_TOAST="ADD_TOAST";
export const CLEAR_TOAST="CLEAR_TOAST";


export function getUser(){
    return {
        type: GET_CURRENT_USER,
        payload: {}
    }
}

export function setUser({firstName, secondName, email}){
    return {
        type: SET_CURRENT_USER,
        payload: {
            firstName: firstName,
            secondName: secondName,
            email: email
        }
    }
}

export function getUserOrders(){
    return {
        type: GET_USER_ORDERS,
        payload: {}
    }
}

export function setUserOrders(orders){
    return {
        type: SET_USER_ORDERS,
        payload: {
            orders: orders
        }
    }
}




export function login(email, password){
    return {
        type: LOGIN,
        payload: {
            email: email,
            password: password
        }
    }
}



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



export function addToCart(id){
    return {
        type: ADD_TO_CART,
        payload: {id}

    }
}


export function removeFromCart(id){
    return {
        type: REMOVE_FROM_CART,
        payload: {id}

    }
}



export function setCart(cart){
    return {
        type: SET_CART,
        payload: cart
    }
}


export function getCart(){
    return {
        type: GET_CART,
        payload: {}
    }
}

export function checkout(first_name, second_name, phone, mail){
    return{
        type: CHECKOUT,
        payload: {
            first_name: first_name,
            second_name: second_name,
            phone: phone,
            mail: mail
        }
    }


}


export function addToast(toastType, message, to) {
    return {
        type: ADD_TOAST,
        payload: { type: toastType, message: message, to: to}
    }
}

export function clearToast(){
    return {
        type: CLEAR_TOAST,
        payload: {}
    }
}


export function registrate(first_name, second_name, phone, mail, password){
    return{
        type: REGISTRATE,
        payload: {
            first_name: first_name,
            second_name: second_name,
            phone: phone,
            mail: mail,
            password: password
        }
    }
}