import axios from "axios";

const BASE_URL = "http://api.bakery"
const PRODUCTS_URL = "/products"
const PRODUCT_URL = "/products/{}"



axios.defaults.baseURL = BASE_URL

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
