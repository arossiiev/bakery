import {useDispatch} from "react-redux";
import {useRef} from "react";
import logo from "../../assets/images/logo.svg";
import {Link} from "react-router-dom";
import {registrate} from "../../actions";


function RegistrationPage(){
    const dispatch = useDispatch();
    const first_name = useRef("");
    const second_name = useRef("");
    const phone = useRef("");
    const mail = useRef("");
    const password = useRef("");


    const handleRegistration = () => {
        dispatch(registrate(
            first_name.current.value,
            second_name.current.value,
            phone.current.value,
            mail.current.value,
            password.current.value
        ))
    }
    return(
        <div className="h-100 d-flex align-items-center justify-content-center bg-soft-yellow">
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
                    <div className="form-group">
                        <label htmlFor="InputPassword">Пароль</label>
                        <input ref={password} type="password" className="form-control" id="InputPassword"/>
                    </div>
                    <button onClick={handleRegistration} type="button" className="btn btn-primary my-2">Зареєструватися</button>
                </form>

            </div>
        </div>
    )

}


export default RegistrationPage;