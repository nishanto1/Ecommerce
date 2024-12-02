import { useMutation, useQuery } from "@tanstack/react-query";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { login } from "../../redux/reducer";
import { addUsers, deleteUsers, usersList } from "../../Request/endPoints";

function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // users list
  const { data, isFetching, refetch } = useQuery({
    queryKey: "users",
    queryFn: async () => {
      const resp = await usersList();
      return resp?.data ?? [];
    },
  });

  // add users
  const formik = useFormik({
    initialValues: { name: "", username: "", email: "" },
    validationSchema: yup.object().shape({
      name: yup.string().required().label("Name"),
      username: yup.string().required().label("Username"),
      email: yup.string().required().label("Email"),
    }),
    onSubmit: async (values) => {
      addMutation?.mutate(values);
    },
  });
  const addMutation = useMutation({
    mutationFn: (payload) => addUsers(payload),
    onSuccess: (resp) => {
      alert("User Added Successfully");
      formik.resetForm();
      refetch();
    },
  });

  // delete user
  const delMutation = useMutation({
    mutationFn: (payload) => deleteUsers(payload),
    onSuccess: (resp) => {
      alert("User Deleted Successfully");
      refetch();
    },
  });

  return (
    <>
      Admin Dashboard <br /> <br />
      <button
        onClick={() => {
          dispatch(login(""));
          navigate("/login");
        }}
      >
        Log out
      </button>
      <br />
      <br />
      <hr />
      <h1>Add User</h1>
      <label htmlFor="">Name</label>
      <br />
      <input
        type="text"
        name="name"
        value={formik?.values?.name}
        onChange={formik?.handleChange}
        onBlur={formik?.handleBlur}
      />
      <span className="danger">
        <br />
        {formik?.touched?.name && formik?.errors?.name}
      </span>
      <br />
      <label htmlFor="">Username</label>
      <br />
      <input
        type="text"
        name="username"
        value={formik?.values?.username}
        onChange={formik?.handleChange}
        onBlur={formik?.handleBlur}
      />
      <span className="danger">
        <br />
        {formik?.touched?.username && formik?.errors?.username}
      </span>
      <br />
      <label htmlFor="">Email</label>
      <br />
      <input
        type="text"
        name="email"
        value={formik?.values?.email}
        onChange={formik?.handleChange}
        onBlur={formik?.handleBlur}
      />
      <span className="danger">
        <br />
        {formik?.touched?.email && formik?.errors?.email}
      </span>
      <br />
      <br />
      <button onClick={formik?.handleSubmit}>Add</button>
      <br />
      <br />
      <hr />
      <h1>User List</h1>
      <table>
        <thead>
          <tr>
            <th>SN.</th>
            <th>Username</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.length > 0
            ? data?.map((data, index) => {
                return (
                  <>
                    <tr>
                      <td>{index + 1}</td>
                      <td>{data?.username ?? ""}</td>
                      <td>{data?.name ?? ""}</td>
                      <td>{data?.email ?? ""}</td>
                      <td>
                        <button
                          className="view"
                          onClick={() => navigate(`/admin/view/${data?.id}`)}
                        >
                          View
                        </button>
                        <button
                          className="danger"
                          onClick={() => delMutation?.mutate(data?.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })
            : "No Data Found"}
        </tbody>
      </table>
      {(isFetching || addMutation?.isPending || delMutation?.isPending) && (
        <>
          <h2>Loading....</h2>
        </>
      )}
    </>
  );
}

export default Dashboard;
