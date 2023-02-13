import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Photos from "./components/Photos";
import SignUpForm from "./components/SignUpForm";
import higherOrderComponent from "./components/Hoc";
import SampleRenderProps from "./components/SampleRenderProps";

const App = () => {
  const TestApp = higherOrderComponent(() => {
    return <div>Test App</div>;
  });

  <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={"/"} element={<h1>This is on Home Page</h1>} />
        <Route path={"/contact"} element={<h1>This is on Contact Page</h1>} />
        <Route path={"/about"} element={<h1>This is on About Page</h1>} />
        <Route path={"/signup"} element={<SignUpForm />} />
        <Route path={"/photos"} element={<Photos />} />
        <Route path={"/test"} element={<TestApp />} />
        <Route path={"/sample"} element={<SampleRenderProps />} />
      </Routes>
    </BrowserRouter>
  </>;
};

export default App;
