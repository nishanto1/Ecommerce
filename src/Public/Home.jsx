import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div>Public Home</div>
      <Link to={"/login"}>Login</Link>
    </>
  );
}

export default Home;
