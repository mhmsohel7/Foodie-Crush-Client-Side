import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className="sign-in-form">
        <div className="sign-in-title">
          <h3>Welcome Back!</h3>
          <p>Please Sign In to your account.</p>
        </div>
        <Form>
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
    </div>
  );
};

export default Register;
