import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/reducer";
import useDetails from "../../hooks/useDetail";

function Dashboard() {
  const details = useDetails();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <h1>Company {details?.name} Dashboard</h1> <br />
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
