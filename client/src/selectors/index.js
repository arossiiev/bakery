



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


export function selectUser(state)
{
    return state.user.user;
}

export function selectUserOrders(state)
{
    return state.user.orders;
}