import Header from "./Header";
import Footer from "./Footer";
import {Link} from "react-router-dom";


function Layout({children, callback}){
    const types = [
        {slug:"cruasany", name:"Круасани"},
        {slug:"sandwich", name:"Сендвіч"},
        {slug:"pechivo", name:"Печиво"},
        {slug:"hlib",name:"Хліб"}
    ];



    return(
        <div className="d-flex flex-column min-vh-100 w-100">
            <Header callback={callback}>
                {types.map((type, index)=>(
                    <Link key={index} to={`/products?type=${type.slug}`}>
                        {type.name}
                    </Link>
                ))}


            </Header>
            <main className="container">
                {children}
            </main>

            <Footer/>
        </div>

    );
}



export default Layout;