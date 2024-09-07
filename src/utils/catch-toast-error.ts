// import { Toast } from "./toast.utils";
import { toast } from "react-toastify";

export const handleError = (error: any) => {
//   Toast.fire({
//     icon: "error",
//     title: error,
//   });
  toast.error(error)
};
