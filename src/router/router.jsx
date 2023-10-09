import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Services from "../Pages/Services/Services";
import Profile from "../Pages/Profile/Profile";
import Events from "../Pages/Events/Events";
import PrivateRout from "./PrivateRout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/service",
          element: <PrivateRout><Services></Services></PrivateRout> ,
        },
        {
          path: "/events/:id",
          element: <PrivateRout><Events></Events></PrivateRout>,
          loader:()=>fetch("/corporateEvents.json")
        },
        {
          path: "/profile",
          element: <PrivateRout><Profile></Profile></PrivateRout>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
      ],
    },
  ]);

  export default router;