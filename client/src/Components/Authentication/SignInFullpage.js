import React from "react";
import Navbar from "./Navbar";
import Signin from "./Signin";
import Footer from "./Footer";

export default function SignInFullpage() {
  return (
    <div>
      <Navbar></Navbar>
      <Signin></Signin>
      <Footer></Footer>
    </div>
  );
}