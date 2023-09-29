import "./App.css";
import ProductDetail from "./features/product/component/ProductDetail";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import SignupPage from "./pages/SignupPage";

// Router
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home/>),
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
    element:<CartPage/>,
  },

  {
    path: "/checkout",
    element:<CheckoutPage/>,
  },

  {
    path: "/product-detail",
    element:<ProductDetailPage/>,
  },

])
function App() {
  return <div className="App ">
   <RouterProvider router={router}/>
  </div>;
}

export default App;
