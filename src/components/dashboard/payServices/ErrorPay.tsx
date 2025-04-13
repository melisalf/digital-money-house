import ErrorIcon from "@/components/common/Icons/ErrorIcon";
import { useRouter } from "next/navigation";
import React, { Dispatch, SetStateAction } from "react";

type ErrorPayProps = {
  setErrorAccount: Dispatch<SetStateAction<boolean>>;
  showErrorAccount?: boolean;
};

const ErrorPay = ({ setErrorAccount, showErrorAccount }: ErrorPayProps) => {

  const handleBack = () => {
    if(showErrorAccount) {
      setErrorAccount(false);
    }

  }

  return (
    <section className="flex flex-col gap-4 md:col-span-9">
      <div className="flex flex-col gap-4 md:col-span-9 md:p-12 md:py-12 md:gap-5 lg:px-20">
        <div className="bg-dark-1 text-white rounded-lg px-5 py-7 md:px-14 md:py-12 flex flex-col gap-6">
          <div className="flex justify-center">
            <ErrorIcon />
          </div>

          <h1 className="font-bold text-white text-xl md:flex md:justify-center md:text-2xl">
            {showErrorAccount
              ? "No encontramos facturas asociadas a este dato"
              : "Hubo un problema con tu pago"}
          </h1>

          <hr className="md:border-t md:border-dark-2" />

          <p className="text-[#cecece] text-xs md:flex md:flex-col md:justify-center md:items-center md:text-base">
            {showErrorAccount
              ? "Revisá el dato ingresado. Si es correcto, es posible que la empresa aún no haya cargado tu factura."
              : "Puede deberse a fondos insuficientes Comunicate con la entidad emisora de la tarjeta"}
          </p>
        </div>

        <div className="flex justify-end ">
          <button
            onClick={handleBack}
            className="bg-green-1 w-48 h-12 text-dark-1 rounded-lg font-bold flex
                          items-center justify-center shadow-[0_4px_4px_rgba(0,0,0,0.10)] md:w-full xl:w-[233px]"
          >
           {showErrorAccount ? "Revisar dato" : "Volver a intentarlo"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ErrorPay;
