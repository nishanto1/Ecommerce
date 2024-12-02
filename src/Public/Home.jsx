import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Welcome to Public Home</h1>
      <Link to={"/login"}>Login</Link>
    </>
  );
}

export default Home;
