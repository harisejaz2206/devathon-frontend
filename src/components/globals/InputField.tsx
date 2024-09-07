import InputError from "./InputError";
import { useState } from "react";
import { Eye, EyeOff } from "./svgIcons/svgIcons";

interface SsProps {
  sm: string;
  lg: string;
  md: string;
}

interface Iprops {
  formik?: any;
  placeholder: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  type?: string;
  name: string;
  hideErrors?: boolean;
  rest?: any;
  value?: any;
  step?: any;
  title?: string;
  disabled?: boolean;
  passwordShown?: boolean;
  label?: any;
  image?: any;
  onChange?: any;
  onEnter?: any;
  addOn?: string;
  required?: boolean;
  inputClass?: any;
  icon?: any;
  ref?: any;
  min?: string | number;
  max?: string | number;
}

const sizeStyles: SsProps = {
  sm: "px-3 py-4 text-sm",
  md: "px-4 py-4 text-base",
  lg: "px-5 py-5 text-lg",
};

const InputField = ({
  formik,
  passwordShown,
  placeholder,
  hideErrors,
  size = "sm",
  className,
  value,
  type,
  title,
  disabled,
  label,
  image,
  onChange,
  onEnter,
  name,
  addOn,
  required,
  step,
  inputClass,
  icon,
  ref,
  min,
  max,
  ...rest
}: Iprops) => {
  const [showPassword, setShowPassword] = useState(passwordShown);

  return (
    <>
      {label && (
        <label className="block text-sm capitalize font-medium text-black-80 dark:text-white">
          {label}
          {/* {required && <span className="text-red-500">*</span>} */}
        </label>
      )}
      <div className={`relative ${className ? className : ""}`}>
        <div className="mb-4 flex w-full items-end gap-3">
          <input
            ref={ref}
            type={
              type
                ? type === "password"
                  ? showPassword
                    ? "text"
                    : type
                  : type
                : "text"
            }
            className={`${inputClass} ${
              inputClass?.includes("left-icon") && "pl-[50px]"
            } block border h-[48px] border-gray-300 text-gray-900 rounded-lg w-full pl-5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-600 dark:text-black   dark:focus:border-black-500 outline-none placeholder:text-gray-500 success:border-primary-600 focus:border-black disabled:cursor-not-allowed disabled:bg-gray-200 disabled:border-gray-300 
            ${formik?.errors[name] ? "!border-danger-200" : ""} 
            ${sizeStyles[size] && sizeStyles[size]}`}
            title={title}
            name={name}
            id={name}
            value={formik?.values[name]}
            step={step}
            placeholder={placeholder ? placeholder : ""}
            disabled={disabled}
            onBlur={formik?.handleBlur}
            onInput={formik?.handleBlur}
            onChange={formik?.handleChange}
            min={min}
            max={max}
            {...rest}
          />
          {icon && (
            <span
              className={`absolute top-[20px]  ${
                inputClass?.includes("left-icon")
                  ? "left-[20px]"
                  : "right-[20px]"
              }`}
            >
              {icon}
            </span>
          )}
          {type === "password" ? (
            !showPassword ? (
              <Eye
                onClick={() => setShowPassword(true)}
                className="cursor-pointer absolute top-[20px] right-[18px]  h-5 w-5"
              />
            ) : (
              <EyeOff
                onClick={() => setShowPassword(false)}
                className="cursor-pointer absolute top-[22px] right-[17px] h-5 w-5"
              />
            )
          ) : (
            ""
          )}
        </div>
        <>
          {!hideErrors &&
            formik &&
            formik.touched[name] &&
            formik.errors[name] && (
              <InputError>{formik.errors[name]}</InputError>
            )}
        </>
      </div>
    </>
  );
};
InputField.defaultProps = {
  disabled: false,
  hideErrors: false,
  passwordShown: false,
  required: true,
};
export default InputField;
