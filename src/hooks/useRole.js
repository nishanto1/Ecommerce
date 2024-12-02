import { useSelector } from "react-redux";

const useRole = () => {
  //   return JSON.parse(localStorage.getItem("details"));
  return useSelector((state) => state?.users?.details?.role ?? "");
};

export default useRole;
