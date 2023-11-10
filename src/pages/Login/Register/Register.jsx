import { useContext } from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
import { toast, ToastContainer } from "react-toastify";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const handleRegister = (e) => {
    setSuccess("");
    setError("");
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);

    //password validation
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
    } else if (!/.+[A-Z].+/.test(password)) {
      setError("Password must contain at least one letter and one number");
    } else {
      setError("");
    }

    //Create user in firebase auth
    createUser(email, password)
      .then((result) => {
        const createUser = result.user;
        toast.success("Successfully register");
        form.reset();
        console.log(createUser);
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
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-4" controlId="formGroupName">
            <Form.Label className="ms-1">Enter Your Name : </Form.Label>
            <Form.Control
              type="name"
              name="name"
              placeholder="Name"
              required
              style={{ height: "50px" }}
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formGroupPhoto">
            <Form.Label className="ms-1">Enter Your Photo URL : </Form.Label>
            <Form.Control
              type="photo"
              name="photo"
              placeholder="Photo URL"
              required
              style={{ height: "50px" }}
            />
          </Form.Group>
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
          <p className="text-danger text-center">{error}</p>
          <p className="text-success text-center">{success}</p>
          <Button type="submit" className="mb-4">
            Register
          </Button>
          <br />
          <Form.Text className="text-success fs-6 p-2 ">
            Already have an account?{" "}
            <Link className="ms-2 text-decoration-none text-danger" to="/login">
              Login!
            </Link>
          </Form.Text>
        </Form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
