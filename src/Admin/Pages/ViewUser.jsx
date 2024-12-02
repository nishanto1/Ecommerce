import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { viewUsers } from "../../Request/endPoints";

function ViewUser() {
  const navigate = useNavigate();
  const { id } = useParams();

  // users view
  const { data, isFetching } = useQuery({
    queryKey: "user-view",
    queryFn: async () => {
      const resp = await viewUsers(id);
      return resp?.data ?? [];
    },
  });

  return (
    <>
      <h1>User Details</h1>
      <button onClick={() => navigate(-1)}>Back</button>
      <br />
      <br />
      <hr />
      <h1>ID : {data?.id}</h1>
      <h1>Name : {data?.name ?? ""}</h1>
      <h1>Username : {data?.username ?? ""}</h1>
      <h1>Email : {data?.email ?? ""}</h1>
      <h1>Address : {data?.address?.city ?? ""}</h1>
      <hr />
      {isFetching && (
        <>
          <h2>Loading....</h2>
        </>
      )}
    </>
  );
}

export default ViewUser;
