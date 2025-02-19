import { useFormContext } from "react-hook-form";
import { clsx } from "clsx";


interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  fieldName: string;
  placeholder?: string;
  onError?: boolean;
  errorText?: string | undefined;
  border?: boolean;
  inputClassName: string;
  wrapperClassName?: string;
  type?: "text" | "email" | "password" | "number" | "tel" | "url";
};

const InputText = ({
  fieldName,
  type,
  placeholder,
  onError,
  errorText,
  wrapperClassName,
  border,
  inputClassName,
  ...props
}: InputTextProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className={wrapperClassName}>
        <input
          {...register(fieldName)}
          type={type}
          placeholder={placeholder}
          {...props}
          className={clsx(
            "w-full p-3 md:p-5 text-lg bg-white text-black rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] justify-center items-center",
            inputClassName,
            {
              "border-green focus:outline-green": !onError,
              "border-error1  focus:outline-error1": onError,
              "border-0 focus:border-0": !border,
            }
          )}
        />
      {errors && errors[fieldName] && (
      
        <p
          className="w-full max-w-[300px] md:max-w-[360px] flex flex-col text-sm italic text-error1 pt-2 pl-3 md:pl-5 text-left"
        >
          {errorText}
        </p>
      )}
    </div>
  );
};

export default InputText;
