import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { isValidUser } from "./Validators";

const SignUpForm = () => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  let handleChange = (e) =>
    setState({ ...state, [e.target.value]: e.target.value });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (
          isValidUser({
            ...state,
          })
        ) {
          console.log("User is valid", state);
        } else {
          setError("The user is invalid");
          console.log("User is not valid");
        }
      }}
    >
      <label>First Name</label>
      <input
        name={"firstName"}
        type={"text"}
        onChange={handleChange}
        value={state.firstName}
        placeholder={"First Name"}
      />
      <input
        name={"lastName"}
        type={"text"}
        onChange={handleChange}
        value={state.lastName}
        placeholder={"Last Name"}
      />
      <input
        name={"email"}
        type={"email"}
        onChange={handleChange}
        value={state.email}
        placeholder={"Email"}
      />
      <input
        name={"password"}
        type={"password"}
        onChange={handleChange}
        value={state.password}
        placeholder={"Password"}
      />
      <button type={"submit"}>Submit</button>
      <span style={{ color: "red" }}>{error}</span>

      {/* <Routes>
        <Route path={"/sum"} element={<SumNumbers />} />
      </Routes> */}

      <Link to={"sum"}>Sum Component</Link>
    </form>
  );
};

export default SignUpForm;
