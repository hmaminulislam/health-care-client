import { createBrowserRouter } from "react-router-dom";
import AddService from "../components/AddService/AddService";
import Blog from "../components/Blog/Blog";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home/Home";
import Login from "../components/Login/Login";
import MyReviews from "../components/MyReviews/MyReviews/MyReviews";
import ReviewEdit from "../components/MyReviews/ReviewEdit/ReviewEdit";
import ServicesPage from "../components/ServicesPage/ServicesPage";
import ServiceDetails from "../components/shared/ServiceDetails/ServiceDetails";
import SignUp from "../components/SignUp/SignUp";
import Main from "../Layout/Main";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://health-care-server.vercel.app/limit-services"),
      },
      {
        path: "/service/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`https://health-care-server.vercel.app/service/${params.id}`),
      },
      {
        path: "/services",
        element: <ServicesPage></ServicesPage>,
        loader: () => fetch("https://health-care-server.vercel.app/services"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/my-reviews",
        element: (
          <PrivateRoutes>
            <MyReviews></MyReviews>
          </PrivateRoutes>
        ),
      },
      {
        path: "/add-service",
        element: (
          <PrivateRoutes>
            <AddService></AddService>
          </PrivateRoutes>
        ),
      },
      {
        path: "/blog",
        element: (
          <PrivateRoutes>
            <Blog></Blog>
          </PrivateRoutes>
        ),
      },
      {
        path: "/edit-review/:id",
        element: (
          <PrivateRoutes>
            <ReviewEdit></ReviewEdit>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://health-care-server.vercel.app/edit-review-get/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
