



export function selectProducts(state){
    return state.products.products;

}


export function selectCurrentProduct(state){
    return state.products.current;

}


export function selectCart(state){
    return state.cart;

}

export function selectToasts(state)
{
    return state.toast;
}