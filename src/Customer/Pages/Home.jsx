import React from "react";
import { login } from "../../redux/reducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      Customer Home <br /> <br />
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
