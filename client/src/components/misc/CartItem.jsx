


function CartItem({imageUrl, name, quantity, onAdd, onRemove}){
    return (
        <div className="container d-flex flex-row justify-content-between align-items-center my-2">
            <div>
                <img className="rounded mx-1" src={imageUrl} style={{width: "120px", height: "80px"}}/>
            </div>
            <div>{name}</div>
            <div className="d-flex flex-row align-items-center">
                <button type="button" className="btn rounded-start btn-outline-success" onClick={onAdd} style={{width: "40px"}}>
                    +
                </button>
                <div className="text-center" style={{width: "40px"}}>{quantity}</div>
                <button type="button" className="btn rounded-end btn-outline-danger" onClick={onRemove} style={{width: "40px"}}>
                    -
                </button>
            </div>
        </div>
    )
}


export default CartItem;