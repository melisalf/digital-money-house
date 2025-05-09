"use client";
import { Toaster } from "sonner";

const CustomToaster = () => {
  return (
    <Toaster
      position="bottom-right"
      richColors={false}
      toastOptions={{
        className:
          "text-dark1 bg-white border border-dark1 rounded-[10px] px-5 py-4 text-sm md:text-base font-semibold shadow-[0_4px_4px_rgba(0,0,0,0.1)] w-[250px]",
        classNames: {
          success: "bg-green text-black border border-green",
          error: "bg-error1 text-white border border-error1",
        },
        duration: 4000,
      }}
    />
  );
};

export default CustomToaster;


