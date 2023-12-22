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
