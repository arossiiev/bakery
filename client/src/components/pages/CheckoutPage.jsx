import {useDispatch} from "react-redux";
import {useRef} from "react";
import {checkout} from "../../actions";
import Layout from "../layout/Layout";


function CheckoutPage(){
    const dispatch = useDispatch();
    const first_name = useRef("");
    const second_name = useRef("");
    const phone = useRef("");
    const mail = useRef("");


    const handleOrder = () => {
        dispatch(checkout(
            first_name.current.value,
            second_name.current.value,
            phone.current.value,
            mail.current.value,
        ))

    }


    return (
        <Layout>
            <div className="row row-cols-md-auto justify-content-center my-3">
                <div className="col">
                    <form className="container">
                        <div className="form-group">
                            <label htmlFor="InputFirstName">Ім'я</label>
                            <input ref={first_name}  type="text" className="form-control" id="InputFirstName"
                                   placeholder="Ім'я"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="InputSecondName">Прізвище</label>
                            <input ref={second_name} type="text" className="form-control" id="InputSecondName"
                                   placeholder="Прізвище"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="InputEmail">Почта</label>
                            <input ref={mail} type="email" className="form-control" id="InputEmail"
                                   aria-describedby="emailHelp" placeholder="example@mail.com"/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                                anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="InputPhone">Телефон</label>
                            <input ref={phone} type="text" className="form-control" id="InputPhone"
                                   placeholder="+38098000000"/>
                        </div>

                        <button onClick={handleOrder} type="button" className="btn btn-primary my-2">Замовити</button>
                    </form>
                </div>
            </div>
        </Layout>

    )
}

export default CheckoutPage;
