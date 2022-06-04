import {Route, Routes} from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";
import ProductsPage from "./components/pages/ProductsPage";
import ProductPage from "./components/pages/ProductPage";




function App() {



  return (
    <>
        <Routes>
            <Route exact path="/" element={<LandingPage/>}/>
            <Route exact path="/products" element={<ProductsPage/>}/>
            <Route exact path="/products/:id" element={<ProductPage/>}/>
        </Routes>
    </>
  );
}

export default App;
