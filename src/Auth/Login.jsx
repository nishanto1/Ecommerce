import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { Roles } from "../Constant";
import { login } from "../redux/reducer";
function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: { name: "", role: "", token: "" },
    validationSchema: yup.object().shape({
      name: yup.string().required().label("Name"),
      role: yup.number().required().label("Role"),
      token: yup.string().required().label("Token"),
    }),
    onSubmit: async (values) => {
      dispatch(login(values));
      if (values?.role == Roles?.ADMIN) {
        console.log("e", typeof values?.role);
        navigate("/admin/dashboard");
      } else if (values?.role == Roles?.COMPANY) {
        navigate("/company/dashboard");
      } else if (values?.role == Roles?.CUSTOMER) {
        navigate("/customer/home");
      } else {
        navigate("/login");
      }
    },
  });
  return (
    <>
      <h1>Login Page</h1>
      <br />
      <br />
      <label htmlFor="">Name</label>
      <br />
      <input
        type="text"
        name="name"
        onChange={formik?.handleChange}
        onBlur={formik?.handleBlur}
      />
      <span className="danger">
        <br />
        {formik?.touched?.name && formik?.errors?.name}
      </span>
      <br />
      <label htmlFor="">Role</label>
      <br />
      <input
        type="number"
        name="role"
        onChange={formik?.handleChange}
        onBlur={formik?.handleBlur}
      />
      <span className="danger">
        <br />
        {formik?.touched?.role && formik?.errors?.role}
      </span>
      <br />
      <label htmlFor="">Token</label>
      <br />
      <input
        type="text"
        name="token"
        onChange={formik?.handleChange}
        onBlur={formik?.handleBlur}
      />
      <span className="danger">
        <br />
        {formik?.touched?.token && formik?.errors?.token}
      </span>
      <br />
      <br />
      <button onClick={formik?.handleSubmit}>Login</button>
      <br />
      <br />
      <p>
        Create an account <Link to={"/register"}>register</Link>
      </p>
      <p>
        go to <Link to={"/"}>Home</Link>
      </p>
    </>
  );
}

export default Login;
