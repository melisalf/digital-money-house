import { FieldError, FieldErrorsImpl, Merge, useFormContext } from "react-hook-form";
import { clsx } from "clsx";
import { ReactEventHandler } from "react";


interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  fieldName: string;
  placeholder?: string;
  isError?: boolean;
  errorText?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  border?: boolean;
  inputClassName: string;
  value?: string;
  type?: "text" | "email" | "password" | "number" | "tel" | "url";
};

const InputText = ({
  fieldName,
  type,
  placeholder,
  isError,
  errorText,
  border,
  inputClassName,
  ...props
}: InputTextProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div >
        <input
          {...register(fieldName)}
          type={type}
          placeholder={placeholder}
          {...props}
          
          className={clsx(
            "w-full h-[50px] md:h-[64px] p-5 text-base md:text-[18px] bg-white text-black rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] justify-center items-center",
            inputClassName,
            {
              "border-green focus:outline-green": !isError,
              "border-error1  focus:outline-error1": isError,
              "border-0 focus:border-0": !border,
            }
          )}
        />
      {errors && errors[fieldName] && (
      
        <p
          className="w-full max-w-[300px] md:max-w-[360px] flex flex-col text-sm italic text-error1 pt-2 pl-3 md:pt-3 md:pl-4 text-left"
        >
          {errorText as string}
        </p>
      )}
    </div>
  );
};

export default InputText;
