import { Outlet } from "react-router-dom";
import Header from "../pages/Shared/Header/Header";

const ChefLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default ChefLayout;
