import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Chef from "../pages/Home/Chefs/Chef";
import ChefDetails from "../pages/ChefDetails/ChefDetails/ChefDetails";
import ChefLayout from "../layouts/ChefLayout";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/chef"></Navigate>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/chef",
    element: <Main></Main>,
    children: [
      {
        path: "/chef",
        element: <Chef></Chef>,
        loader: () =>
          fetch(
            "https://chef-recipe-server-ass-10-masumbillah99.vercel.app/chef"
          ),
      },
    ],
  },
  {
    path: "/chef",
    element: <ChefLayout />,
    children: [
      {
        path: ":id",
        element: <ChefDetails />,
        loader: ({ params }) =>
          fetch(
            `https://chef-recipe-server-ass-10-masumbillah99.vercel.app/chef/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
