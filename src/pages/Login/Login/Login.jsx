import { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";

import { toast, ToastContainer } from "react-toastify";
const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    //Create user in firebase auth
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        toast.success("Successfully Login");
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.code);
      });
  };
  return (
    <div>
      <div className="sign-in-form">
        <div className="sign-in-title">
          <h3>Welcome Back!</h3>
          <p>Please Sign In to your account.</p>
        </div>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-4" controlId="formGroupEmail">
            <Form.Label className="ms-1">Enter Your Email : </Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Email"
              required
              style={{ height: "50px" }}
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formGroupPassword">
            <Form.Label className="ms-1">Enter your Password : </Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              required
              style={{ height: "50px" }}
            />
          </Form.Group>
          <Button type="submit" className="mb-4">
            Login
          </Button>
          <br />
          <Form.Text className="text-success fs-6 p-2 ">
            Dont have an account?{" "}
            <Link
              className="ms-2 text-decoration-none text-danger"
              to="/register"
            >
              Register!
            </Link>
          </Form.Text>
        </Form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
