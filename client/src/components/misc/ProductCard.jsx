

function ProductCard({name, image_url, price}){
    return (
        <div className="card my-2 px-0 mx-auto shadow" style={{width: "18rem"}}>
            <img src={image_url} className="card-img-top" style={{width:"18rem",height:"10rem"}}/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>


            </div>
            <div className="card-footer">
                Ціна: {price/100} грн.
            </div>
        </div>

    )
}

export default ProductCard;