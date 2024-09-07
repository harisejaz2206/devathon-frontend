import React from "react";
import { InfoIcon } from "./svgIcons/svgIcons";

const InputError = ({ children, error }: any) => {
  return (
    <div className="flex items-center mt-2 text-sm">
      <span className="text-red-700">
        <InfoIcon width="16px" height="16px" />
      </span>
      <p className="ms-1.5 text-red-700 text-xs">{children}</p>
    </div>
  );
};

export default InputError;
