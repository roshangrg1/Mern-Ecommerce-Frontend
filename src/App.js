import "./App.css";
import Protected from "./features/auth/component/Protected";
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
  return <div className="App ">
   <RouterProvider router={router}/>
  </div>;
}

export default App;
