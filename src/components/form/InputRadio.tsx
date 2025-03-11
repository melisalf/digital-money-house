import clsx from "clsx";
import { forwardRef } from "react";

interface InputRadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  value: string;
  type: string;
  children?: React.ReactNode;
  disabled?: boolean;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputClassName?: string;
  wrappedClassName?: string;
}

const InputRadio = ({
  name,
  value,
  type = "radio",
  children,
  disabled,
  checked,
  onChange,
  inputClassName,
  wrappedClassName,
  ...props
}: InputRadioProps) => {
  return (
    <div className={clsx("flex items-center cursor-pointer", wrappedClassName)}>
      <input
        type="radio"
        name={name}
        value={value}
        onChange={onChange}
        className={clsx(
          "w-4 h-4 cursor-pointer appearance-none border-[1.6px] border-dark1 checked:bg-green checked:border-2 rounded-full border-opacity-50 relative",
          inputClassName
        )}
        checked={checked}
        {...props}
      />
    </div>
  );
};

export default InputRadio; 