import github from "../../assets/images/github.svg"
import gmail from "../../assets/images/gmail.svg"
import "../../assets/css/index.css"


function Footer(){


    return(
        <footer className="d-flex flex-column bg-grey mt-auto">
            <div className="container text-center text-md-start text-white w-100 py-4 px-4">
                <div className="row">
                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled no-text-decoration">
                            <li>
                                <a className="d-flex" href="https://github.com/blakfar" target="_blank" rel="noreferrer"><img src={github} alt={"github"} width={32} height={32}/>
                                    <p className="text-white fs-5 my-0 mx-1 font-monospace">Github</p>
                                </a>

                            </li>
                            <li>
                                <a className="d-flex" href="https://mail.google.com/mail/u/0/?source=mailto&to=rossievsasa@gmail.com&fs=1&tf=cm" target="_blank" rel="noreferrer"><img src={gmail} alt={"mail"} width={32} height={32}/>
                                    <p className="text-white fs-5 my-0 mx-1 font-monospace">rossievsasa@gmail.com</p>
                                </a>
                            </li>
                        </ul>

                    </div>

                </div>
            </div>
            <div className="text-center py-3 bg-black text-white font-monospace"><p className="m-0">© 2022 Copyright: rossievsasa@gmail.com</p><div/>
        </div>
        </footer>

    );

}





export default Footer;