import React from "react";
import { login } from "../../redux/reducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useDetails from "../../hooks/useDetail";

function Home() {
  const details = useDetails();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <h1>Customer {details?.name} Home</h1> <br /> <br />
      <button
        onClick={() => {
          dispatch(login(""));
          navigate("/login");
        }}
      >
        Log out
      </button>
    </>
  );
}

export default Home;
