import axios from "axios";


const BASE_URL = "http://api.bakery"
const PRODUCTS_URL = "/products"
const PRODUCT_URL = "/products/{}"
const ADD_TO_CART_URL = "/add_product/{}"
const REMOVE_FROM_CART_URL = "/remove_product/{}"
const CART_URL = "/cart"
const CHECKOUT_URL = "/checkout"
const REGISTRATION_URL = "user/registration"
const LOGIN_URL = "/login"
const CURRENT_USER = "user/me"
const USER_ORDERS = "/user/orders"



axios.defaults.baseURL = BASE_URL
axios.defaults.withCredentials = true


String.prototype.format = function ()
{
    let i = 0, args = arguments;
    return this.replace(/{}/g, function () {
        return typeof args[i] != 'undefined' ? args[i++] : '';
    });
};


export function fetchProducts({type, search}){
    return axios.get(PRODUCTS_URL, {
        params:{
            type,
            search
        }
    })
}


export function fetchProduct({id}){
    return axios.get(PRODUCT_URL.format(id));
}


export function fetchCart(){
    return axios.get(CART_URL,  {baseURL: "https://api.bakery"});
}


export function addToCartProduct({id}){

    return axios.post(ADD_TO_CART_URL.format(id), null, {baseURL: "https://api.bakery"});
}


export function removeFromCartProduct({id}){
    return axios.post(REMOVE_FROM_CART_URL.format(id),null, {baseURL: "https://api.bakery"});
}



export function checkoutService(first_name, second_name, phone, mail){
    const token = localStorage.getItem("authToken")
    return axios.post(CHECKOUT_URL,{
        first_name: first_name,
        second_name: second_name,
        mail: mail,
        phone: phone
    }, {
        baseURL: "https://api.bakery",
        headers: {
            "X-AUTH-TOKEN": token

        }
    });
}


export function registrationService(first_name, second_name, phone, mail, password){
    return axios.post(REGISTRATION_URL,{
        first_name: first_name,
        second_name: second_name,
        mail: mail,
        phone: phone,
        password: password
    });
}


export function loginService(mail, password){
    return axios.post(LOGIN_URL,{
        email: mail,
        password: password
    });
}


export function fetchUserService(){
    const token = localStorage.getItem("authToken")
    return axios.get(CURRENT_USER,{
        headers: {
            "X-AUTH-TOKEN": token
        }
    });
}


export function fetchUserOrdersService(){
    const token = localStorage.getItem("authToken")
    return axios.get(USER_ORDERS,{
        headers: {
            "X-AUTH-TOKEN": token
        }
    });
}



