import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import "./SignUpForm.css";

const SignUpForm = ({ navigate }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    fetch("/users", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
      }),
    }).then((response) => {
      if (response.status === 201) {
        console.log("user created successfully");
        navigate("/login");
      } else {
        console.log("user not created");
        navigate("/signup");
      }
    });
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  return (
    <>
    <Navbar />
    <div className="background-image">
      <div className="container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-7 text-center text-lg-start text-white">
            <h1 className="display-4 fw-bold lh-1 mb-3">Join Us!</h1>
            <p className="col-lg-10 fs-2" >
              From music festivals to art exhibitions, theater performances to
              food markets, we've got something for everyone.
              </p>
          </div>
          <div className="col-md-10 mx-auto col-lg-5">
            <form
              className="p-4 p-md-5 border rounded-3 bg-light"
              onSubmit={handleSubmit}
            >
              <div className="form-floating mb-3">
                <input
                  placeholder="First Name"
                  data-testid="firstName"
                  type="text"
                  value={firstName}
                  onChange={handleFirstNameChange}
                  className="form-control"
                  required
                  minLength={2}
                  id="floatingInputfirstName"
                />
                <label htmlFor="floatingInputfirstName">First Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  placeholder="Last Name"
                  data-testid="lastName"
                  type="text"
                  value={lastName}
                  onChange={handleLastNameChange}
                  className="form-control"
                  required
                  minLength={2}
                  id="floatingInputlastName"
                />
                <label htmlFor="floatingInputlastName">Last Name</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  placeholder="Email"
                  data-testid="email"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  className="form-control"
                  id="floatingInputEmail"
                ></input>
                <label htmlFor="floatingInputEmail">Email address</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  placeholder="Password"
                  data-testid="password"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  className="form-control"
                  required
                  minLength={8}
                  maxLength={20}
                  id="floatingInputPassword"
                />
                <label htmlFor="floatingInputPassword">Password</label>
              </div>

              <button className="w-100 btn btn-lg btn-dark" type="submit">
                Sign up
              </button>
              <hr className="my-4"></hr>
              <small className="text-muted">
                By clicking Sign up, you agree to the terms of use.
              </small>
              <br></br>
              <br></br>
              <div className="form-prompt">
                <p>Already have an account?</p>
                <div>
                  <a href="/login">
                    <button className="w-100 btn btn-lg btn-dark" type="button">
                      Log in
                    </button>
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default SignUpForm;
