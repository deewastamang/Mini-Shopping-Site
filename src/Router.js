import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Products, {productsLoader} from "./pages/products/Products";
import ProductLayoutDetail from "./components/ProductLayoutDetail";
import ProductInfo from "./pages/products/ProductInfo";
import Ratings from "./pages/products/Ratings";
import { productLayoutLoader } from "./components/ProductLayoutDetail";
import CartContainer from './pages/products/CartContainer'
import Login, { loginLoader } from "./pages/Login";
import Register from "./pages/Register";
import CartItem from "./pages/products/CartItem";
import requireAuth from "./utils";
import NotFound from "./pages/NotFound";
import Error from "./components/Error";


const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />} >
        <Route 
        index 
        errorElement={<Error />} 
        element={<Home />} />
        
        <Route 
        path='about' 
        errorElement={<Error />} 
        element={<About />} />

        <Route path='project' 
        loader={requireAuth} 
        errorElement={<Error />} 
        element={<Project />} />

        <Route path='project/products' 
        loader={productsLoader}
        errorElement={<Error />} 
        element={<Products />} 
        />

        <Route path='project/products/:id' 
        loader={productLayoutLoader}
        errorElement={<Error />} 
        element={<ProductLayoutDetail />} >

            <Route index 
            loader={requireAuth} 
            errorElement={<Error />} 
            element={<ProductInfo />} />

            <Route 
            path='ratings' 
            loader={requireAuth} 
            errorElement={<Error />} 
            element={<Ratings />} />

        </Route>

        <Route 
        path='project/products/cartcontainer' 
        loader={requireAuth} 
        errorElement={<Error />} 
        element={<CartContainer />} />

        <Route 
        path='project/products/cartitem' 
        loader={requireAuth} 
        errorElement={<Error />} 
        element={<CartItem />} />

        <Route 
        path='login' 
        loader={loginLoader} 
        errorElement={<Error />} 
        element={<Login />} />

        <Route 
        path='register' 
        errorElement={<Error />} 
        element={<Register />} />

        <Route 
        path='*' 
        errorElement={<Error />} 
        element={<NotFound />} />
    </Route>
))

export default function Router() {
  return (
    <RouterProvider router={router} />
        
  )
}
