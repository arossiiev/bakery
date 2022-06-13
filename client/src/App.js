import {Route, Routes} from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";
import ProductsPage from "./components/pages/ProductsPage";
import ProductPage from "./components/pages/ProductPage";
import CartPage from "./components/pages/CartPage";
import Toast from "./components/misc/Toast";
import CheckoutPage from "./components/pages/CheckoutPage";
import RegistrationPage from "./components/pages/RegistrationPage";
import LoginPage from "./components/pages/LoginPage";
import UserPage from "./components/pages/UserPage";





function App() {



  return (
    <>
        <Routes>
            <Route exact path="/" element={<LandingPage/>}/>
            <Route exact path="/products" element={<ProductsPage/>}/>
            <Route exact path="/products/:id" element={<ProductPage/>}/>
            <Route exact path="/cart" element={<CartPage/>}/>
            <Route exact path="/checkout" element={<CheckoutPage/>}/>
            <Route exact path="/registration" element={<RegistrationPage/>}/>
            <Route exact path="/login" element={<LoginPage/>}/>
            <Route exact path="/user" element={<UserPage/>}/>
        </Routes>
        <Toast/>
    </>
  );
}

export default App;
