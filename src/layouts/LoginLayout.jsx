import { Outlet } from "react-router-dom";
import Header from "../pages/Shared/Header/Header";

const LoginLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default LoginLayout;
