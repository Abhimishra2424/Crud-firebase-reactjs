import React from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer autoClose={1500} />
      <Navbar />
      <Form />
      {/* <Footer /> */}
    </>
  );
}

export default App;
