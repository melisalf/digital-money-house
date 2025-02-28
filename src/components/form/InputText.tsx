import { FieldError, FieldErrorsImpl, Merge, useFormContext } from "react-hook-form";
import { clsx } from "clsx";

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  fieldName: string;
  placeholder?: string;
  errorText?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  inputClassName?: string;
  value?: string;
  type?: "text" | "email" | "password" | "number" | "tel" | "url";
}

const InputText = ({
  fieldName,
  type = "text",
  placeholder,
  errorText,
  inputClassName,
  ...props
}: InputTextProps) => {
  const { register, formState: { errors } } = useFormContext();
  const hasError = !!errors[fieldName];

  return (
    <div className="w-full">
      <input
        {...register(fieldName)}
        type={type}
        placeholder={placeholder}
        {...props}
        className={clsx(
          "w-full h-[50px] md:h-[64px] p-5 text-base md:text-[18px] border-dark1 bg-white text-black rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] outline-none transition-all focus:border-gray1 focus:ring-0",
          hasError 
            ? "border border-error1 focus:outline-error1"
            : "border-gray1 focus:outline-gray1 focus:right-0",
          inputClassName
        )}
      />
      {hasError && (
        <p className="w-full max-w-[300px] md:max-w-[360px] flex flex-col text-sm italic text-error1 pt-2 pl-3 md:pt-3 md:pl-4 text-left">
          {errorText as string}
        </p>
      )}
    </div>
  );
};

export default InputText;
