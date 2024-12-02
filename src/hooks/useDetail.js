import { useSelector } from "react-redux";

const useDetails = () => {
  //   return JSON.parse(localStorage.getItem("details"));
  return useSelector((state) => state?.users?.details ?? "");
};

export default useDetails;
