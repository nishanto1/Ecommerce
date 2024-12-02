import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/reducer";

function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      Company Dashboard <br />
      <br />
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

export default Dashboard;
