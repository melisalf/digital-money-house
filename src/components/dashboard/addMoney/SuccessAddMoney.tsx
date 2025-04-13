"use client";
import CheckIcon from "@/components/common/Icons/CheckIcon";
import { useSelectCard, useSetAmount } from "@/context/moneyContext";
import { AccountType } from "@/types/account.types";
import { formatDated } from "@/utils/formatDated";
import { useRouter } from "next/navigation";

type SuccessAddMoneyProps = {
  accountData: AccountType;
};

const SuccessAddMoney = ({ accountData}: SuccessAddMoneyProps) => {
  const { amount, setAmount } = useSetAmount();
  const { setCardId } = useSelectCard();
  const date = new Date();
  const router = useRouter();

  const handlePushToDashboard = () => {
    router.push("/dashboard");
	setCardId(0);
  };

  const handleDownloadReceipt = () => {
	  console.log("✅ Descargando comprobante...")
  };

  return (
    <>
      <section className="flex flex-col gap-5">
        <div className="w-full flex flex-col gap-3 items-center justify-center bg-green py-4 md:py-5 rounded-[8px]">
          <div className="flex items-center w-16">
		  <CheckIcon className="fill-black w-16"/>
		  </div>
		
          <h2 className="font-bold text-base md:text-2xl text-black">
            Ya cargamos el dinero en tu cuenta
          </h2>
        </div>
        <div className="bg-dark1 flex flex-col gap-3 rounded-[8px] p-6 md:px-8 md:gap-6 xl:gap-0 md:py-8">

          <div className="flex flex-col gap-6 mb-4 mt-2 xl:mt-4 md:ml-6">
            <div className="flex flex-col gap-1">
              <p className="font-normal text-xs"> {formatDated(date)} </p>
              <p className="font-bold text-xl text-green">
                {amount.toLocaleString("es-AR", {
                  style: "currency",
                  currency: "ARS",
                })}
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <p className="font-normal text-xs">Para</p>
              <p className="font-bold text-xl text-green">Cuenta propia</p>
            </div>

            <div className="flex flex-col gap-1">
              <p className="font-normal text-base">Brubank</p>
              <p className="font-normal text-xs">CVU {accountData.cvu}</p>
            </div>
          </div>
        </div>

        <div className="w-full xl:justify-items-end flex-col gap-5 flex md:flex-row-reverse">
          <div className="w-1/4">
		  <button
            onClick={handleDownloadReceipt}
            className="w-full bg-green border-green h-[50px] md:h-[64px] flex p-5 font-bold text-center text-dark1 items-center rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] justify-center"
          >
            Descargar comprobante
          </button>
		  </div>
		  <div className="w-1/4">
		  <button
            onClick={handlePushToDashboard}
            className="w-full bg-button1 border-button1 border-green h-[50px] md:h-[64px] flex p-5 font-bold text-center text-dark1 items-center rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] justify-center"
          >
            Ir al inicio
          </button>
		  </div>
        </div>
      </section>
    </>
  );
};

export default SuccessAddMoney;
