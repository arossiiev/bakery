import Layout from "../layout/Layout";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getProducts} from "../../actions";
import {useQuery} from "../../hooks";
import {selectProducts} from "../../selectors";
import Loading from "../layout/Loading";
import ProductCard from "../misc/ProductCard";





function ProductsPage(){
    const dispatch = useDispatch();

    const query = useQuery();

    useEffect(()=>{
        dispatch(getProducts(null, query.get("type")));

    }, [dispatch, query])

    const products = useSelector(selectProducts);

    if (products === null){
        return <Loading/>;
    }


    return (
        <Layout>
            <div className="row row-cols-md-auto my-3">
                {products.map(({id, name, imageUrl, price})=>
                    <Link key={id} to={`/products/${id}`} style={{textDecoration:"none"}}>
                        <div className="col no-text-decoration">
                            <ProductCard
                                key={id}
                                name={name}
                                image_url={imageUrl}
                                price={price}
                            />
                        </div>
                    </Link>
                )}
            </div>
        </Layout>
    );


}

export default ProductsPage;