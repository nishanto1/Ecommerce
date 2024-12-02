import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { login } from "../redux/reducer";

function Register() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: { email: "", role: "" },
    validationSchema: yup.object().shape({
      email: yup.string().required(),
      role: yup.number().required(),
    }),
    onSubmit: async (values) => {
      dispatch(login(values));
    },
  });
  return (
    <>
      <div>Register Page</div>
      <br />
      <br />
      <label htmlFor="">Email</label>
      <br />
      <input
        type="text"
        name="email"
        onChange={formik?.handleChange}
        onBlur={formik?.handleBlur}
      />
      <span className="danger">
        <br />
        {formik?.touched?.email && formik?.errors?.email}
      </span>
      <br />
      <label htmlFor="">Role</label>
      <br />
      <input
        type="number"
        name="role"
        max={1}
        onChange={formik?.handleChange}
        onBlur={formik?.handleBlur}
      />
      <span className="danger">
        <br />
        {formik?.touched?.role && formik?.errors?.role}
      </span>
      <br />
      <br />
      <button>Register</button>
      <br />
      <br />
      <p>
        Already have an account <Link to={"/login"}>login</Link>
      </p>
    </>
  );
}

export default Register;
