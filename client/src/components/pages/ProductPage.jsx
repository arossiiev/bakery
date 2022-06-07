import Layout from "../layout/Layout";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {addToCart, getProduct, getProducts} from "../../actions";

import {selectCurrentProduct, selectProducts} from "../../selectors";
import Loading from "../layout/Loading";
import ProductCard from "../misc/ProductCard";
import {useParams} from "react-router";





function ProductPage(){
    const dispatch = useDispatch();

    const {id} = useParams();

    useEffect(()=>{
        dispatch(getProduct(id));

    }, [dispatch, id])

    const product = useSelector(selectCurrentProduct);

    if (product === null){
        return <Loading/>;
    }

    const handleAddToCart = () => {
        dispatch(addToCart(id))
    }
    return (
        <Layout>
            <div className="row row-cols-md-1 justify-content-center my-3">
                <div className="col">
                    <h4 className="text-center">{product.name}</h4>
                    <div className="container d-block d-lg-none my-2" style={{width: "80vw"}}>
                        <img className="rounded img-fluid" src={product.imageUrl} alt={product.name}/>
                    </div>
                    <div className="container d-flex flex-row">
                        <div className="d-none d-lg-block" style={{width: "100vw"}}>
                            <img className="rounded img-fluid" src={product.imageUrl} alt={product.name}/>
                        </div>
                        <div className="d-flex flex-column px-2 justify-content-between">
                            <div>
                                <h6>Склад</h6>
                                <p>
                                    {product.ingredients}
                                </p>
                            </div>

                            <div className="container d-flex justify-content-between">
                                <h4>Ціна: {product.price / 100} грн.</h4>
                                <button onClick={handleAddToCart} type="button" className="btn btn-outline-primary">Додати у кошик</button>
                            </div>

                        </div>
                    </div>

                    </div>

            </div>
        </Layout>
    );


}

export default ProductPage;