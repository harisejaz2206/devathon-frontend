import { HttpStatusCode } from "axios";
import { Toast } from "./toast.utils";
import { toast } from "react-toastify";

type HandleApiResponseParams = {
  result: any;
  handleSuccess: any;
  formik?: any;
};

export const handleApiResponse = ({
  result,
  handleSuccess,
  formik,
}: HandleApiResponseParams) => {
  console.log("result.payload: ", result.payload);
  console.log("result.payload.statusCode: ", result.payload.statusCode);
  if (result.payload && result.payload.statusCode) {
    switch (result.payload.statusCode) {
      case HttpStatusCode.Ok:
        handleSuccess();
        break;

      case HttpStatusCode.Created:
        handleSuccess();
        Toast.fire({
          icon: "success",
          title: result.payload.message,
        });
        break;

      case HttpStatusCode.BadRequest:
        Toast.fire({
          icon: "error",
          title: result.payload.message,
        });
        break;

      case HttpStatusCode.Unauthorized:
        Toast.fire({
          icon: "warning",
          title: result.payload.message,
        });
        break;

      case HttpStatusCode.Forbidden:
        Toast.fire({
          icon: "error",
          title: result.payload.message,
        });
        break;

      case HttpStatusCode.NotFound:
        Toast.fire({
          icon: "warning",
          title: result.payload.message,
        });
        break;

      case HttpStatusCode.UnprocessableEntity:
        formik?.setErrors(result.payload.errors);
        Toast.fire({
          icon: "error",
          title: result.payload.message,
        });
        break;

      case HttpStatusCode.Gone:
        Toast.fire({
          icon: "error",
          title: result.payload.message,
        });
        break;

      case HttpStatusCode.InternalServerError:
        Toast.fire({
          icon: "error",
          title: result.payload.message,
        });
        break;

      default:
        toast.error(result.payload.message)
        // Toast.fire({
        //   icon: "error",
        //   title: result.payload.message,
        // });
    }
  }
};
