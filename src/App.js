import { useDispatch } from "react-redux";
import { useEffect } from "react";
import "./App.css";
import Protected from "./features/auth/component/Protected";
import ProductDetail from "./features/product/component/ProductDetail";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import SignupPage from "./pages/SignupPage";
import UserOrdersPage from './pages/UserOrdersPage';
import { useSelector } from "react-redux";
import { fetchItemsByUserIdAsync } from './features/cart/CartSlice';



// Router
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { selectLoggedInUser } from "./features/auth/authSlice";
import PageNotFound from "./pages/404";
import OrderSuccessPage from "./pages/OrderSuccessPage";
import UserOrderPage from "./pages/UserOrdersPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Protected><Home/></Protected>),
  },
  {
    path: "/login",
    element:<LoginPage/>,
  },

  {
    path: "/signup",
    element:<SignupPage/>,
  },

  {
    path: "/cart",
    element:<Protected><CartPage/></Protected>,
  },

  {
    path: "/checkout",
    element:<Protected><CheckoutPage/></Protected>,
  },

  {
    path: "/product-detail/:id",
    element:<Protected><ProductDetailPage/></Protected>,
  },

  {
    path: "/order-success/:id",
    element:<Protected><OrderSuccessPage/></Protected>,
  },

  {
    path: "/orders",
    element:<Protected><UserOrdersPage/></Protected>, 
    // we will add Page Later right now using component
  },
  {
    path: "*",
    element:<PageNotFound></PageNotFound>
  },

])
function App() {

  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser)
  useEffect(()=>{
    if(user){
      dispatch(fetchItemsByUserIdAsync(user.id))
    }
    
  }, [dispatch, user])
  return <div className="App ">
   <RouterProvider router={router}/>
  </div>;
}

export default App;
