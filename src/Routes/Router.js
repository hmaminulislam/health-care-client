import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home/Home";
import Login from "../components/Login/Login";
import ServicesPage from "../components/ServicesPage/ServicesPage";
import ServiceDetails from "../components/shared/ServiceDetails/ServiceDetails";
import SignUp from "../components/SignUp/SignUp";
import Main from "../Layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/limit-services"),
      },
      {
        path: "/service/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/service/${params.id}`),
      },
      {
        path: "/services",
        element: <ServicesPage></ServicesPage>,
        loader: () => fetch("http://localhost:5000/services"),
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      }
    ],
  },
]);

export default router