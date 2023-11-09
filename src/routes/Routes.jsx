import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Chef from "../pages/Home/Chefs/Chef";
import ChefDetails from "../pages/ChefDetails/ChefDetails/ChefDetails";
import ChefLayout from "../layouts/ChefLayout";

const router = createBrowserRouter([
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
