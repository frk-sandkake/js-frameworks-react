import {Route, Routes} from 'react-router-dom';
import Home from '../components/views-pages/Home';
import Products from "../components/views-pages/Products";
import NotFound from "../components/views-pages/NotFound";
import ProductDetails from "../components/views-pages/ProductDetails";

function Router() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/products" element={<Products/>} />
                <Route path="/products/:id" element={<ProductDetails/>} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </>
    );
}

export default Router;
