import axios from "axios";


const BASE_URL = "http://api.bakery"
const PRODUCTS_URL = "/products"
const PRODUCT_URL = "/products/{}"
const ADD_TO_CART_URL = "/add_product/{}"
const REMOVE_FROM_CART_URL = "/remove_product/{}"
const CART_URL = "/cart"
const CHECKOUT_URL = "/checkout"


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
    return axios.post(CHECKOUT_URL,{
        first_name: first_name,
        second_name: second_name,
        mail: mail,
        phone: phone
    }, {baseURL: "https://api.bakery"});
}