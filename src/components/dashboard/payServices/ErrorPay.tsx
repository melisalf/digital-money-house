import ErrorIcon from "@/components/common/Icons/ErrorIcon";
import { useRouter } from "next/navigation";
import React, { Dispatch, SetStateAction } from "react";

type ErrorPayProps = {
  setErrorAccount: Dispatch<SetStateAction<boolean>>;
  showErrorAccount?: boolean;
};


const ErrorPay = ({ setErrorAccount, showErrorAccount }: ErrorPayProps) => {



  return (
    <section className="flex flex-col gap-5">
        <div className="bg-dark1 rounded-[8px] p-7 md:px-12 md:pb-10 md:pt-11 flex flex-col gap-4 md:gap-6 items-center">
          <div className="flex items-center justify-center">
            <ErrorIcon
             className="w-[41px] h-[41px] md:w-[65px] md:h-[65px] "/>
          </div>

          <h1 className="font-bold text-xl text-center md:flex md:justify-center md:text-2xl ">
            {showErrorAccount
              ? "No encontramos facturas asociadas a este dato"
              : "Hubo un problema con tu pago"}
          </h1>

          <div className="w-full border-b border-button1/80 md:my-2 xl:my-0" />

          <p className="text-button1/80 text-xs text-center md:flex md:flex-col md:justify-center md:items-center md:text-base md:px-5 xl:px-10 xl:w-2/4">
            {showErrorAccount
              ? "Revisá el dato ingresado. Si es correcto, es posible que la empresa aún no haya cargado tu factura."
              : "Puede deberse a fondos insuficientes Comunicate con la entidad emisora de la tarjeta"}
          </p>
        </div>

        <div className="w-full h-[50px] md:h-[64px] flex justify-end ">
          <button
            onClick={() => setErrorAccount(false)}
            className="w-[165px] h-[50px] md:h-[64px] bg-green text-dark1 rounded-lg font-bold flex
                          items-center justify-center shadow-[0_4px_4px_rgba(0,0,0,0.10)] md:w-full xl:w-[233px]"
          >
           {showErrorAccount ? "Revisar dato" : "Volver a intentarlo"}
          </button>
        </div>
    </section>
  );
};

export default ErrorPay;
