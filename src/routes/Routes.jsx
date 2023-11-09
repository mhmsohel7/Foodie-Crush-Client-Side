import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Chef from "../pages/Home/Chefs/Chef";

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
]);

export default router;
