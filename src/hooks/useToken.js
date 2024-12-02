import { useSelector } from "react-redux";

const useToken = () => {
  //   return localStorage.getItem("token");
  return useSelector((state) => state?.users?.details?.token ?? "");
};

export default useToken;
