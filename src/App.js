import "./App.css";
import Signup from "./features/auth/component/Signup";
import CartPage from "./pages/CartPage";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
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
    element:<Signup/>,
  },

  {
    path: "/cart",
    element:<CartPage/>,
  },

])
function App() {
  return <div className="App ">
   <RouterProvider router={router}/>
  </div>;
}

export default App;
