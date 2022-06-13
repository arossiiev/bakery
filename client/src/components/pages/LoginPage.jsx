import {useDispatch} from "react-redux";
import {useRef} from "react";
import {login} from "../../actions";
import {Link} from "react-router-dom";
import logo from "../../assets/images/logo.svg";


function LoginPage(){
    const dispatch = useDispatch();
    const mail = useRef("");
    const password = useRef("");


    const handleLogin = () => {
        dispatch(login(
            mail.current.value,
            password.current.value
        ))
    }
    return(
        <div className="d-flex justify-content-center align-items-center w-100 h-100 bg-soft-yellow">
            <div className="rounded shadow no-text-decoration bg-white" >
                <div className="d-flex justify-content-center">
                    <Link to="/">
                        <div className="d-flex navbar-brand" >
                            <img className="mx-2" src={logo} alt={"Logo"} width={32} height={32}/>
                            <h3 className="company-name mx-2 mb-0">Bakery</h3>
                        </div>
                    </Link>
                 </div>
                <form className="container">
                    <div className="form-group">
                        <label htmlFor="InputEmail">Почта</label>
                        <input ref={mail} type="email" className="form-control" id="InputEmail"
                               aria-describedby="emailHelp" placeholder="example@mail.com"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                            anyone else.</small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="InputPassword">Пароль</label>
                        <input ref={password} type="password" className="form-control" id="InputPassword"/>
                    </div>
                    <button onClick={handleLogin} type="button" className="btn btn-primary my-2">Вхід</button>
                </form>

            </div>
        </div>
    )

}


export default LoginPage;



