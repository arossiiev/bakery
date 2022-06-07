import {useDispatch, useSelector} from "react-redux";
import {selectCart} from "../../selectors";
import Layout from "../layout/Layout";
import Carousel from "../misc/Carousel";
import production from "../../assets/images/production.jpg";
import CartItem from "../misc/CartItem";
import {addToCart, removeFromCart} from "../../actions";
import {Link} from "react-router-dom";


function CartPage(){
    const dispatch = useDispatch()

    const cart = useSelector(selectCart);


    return (
        <Layout>
            <div className="row row-cols-md-1 justify-content-center my-3">
                <div className="col">
                    <div>
                        {cart.map(({id, name, imageUrl, quantity})=>(
                            <CartItem
                                name={name}
                                imageUrl={imageUrl}
                                quantity={quantity}
                                onAdd={() => {dispatch(addToCart(id))}}
                                onRemove={() => {dispatch(removeFromCart(id))}}
                            />
                        ))}
                    </div>
                    <div className="d-flex flex-row justify-content-end">
                        <Link to="/checkout">
                            <button className="btn btn-outline-primary">
                                Оформити замовлення
                            </button>
                        </Link>

                    </div>
                </div>

            </div>

        </Layout>

    )

}


export default CartPage;