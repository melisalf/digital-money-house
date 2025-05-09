"use client";
import CheckIcon from "@/components/common/Icons/CheckIcon";
import { useSelectCard, useSetAmount } from "@/context/moneyContext";
import { useTransaction } from "@/context/transactionContext";
import { AccountType } from "@/types/account.types";
import { downloadReceiptPDF } from "@/utils/downloadReceiptPDF";
import { formatDated } from "@/utils/formatDated";
import { useRouter } from "next/navigation";


type OperationType = "addCard" | "addMoney" | "payService";

type SuccessMessageProps = {
  accountData: AccountType;
  showAddMoneyPage?: boolean;
  showPayServicePage?: boolean;
  onClose?: () => void;
  operationType: OperationType;
  linkTo?: string;
};

const SuccessMessage = ({
  accountData,
  operationType,
  showAddMoneyPage,
  showPayServicePage,
}: SuccessMessageProps) => {
  const { amount } = useSetAmount();
  const { cardId, setCardId } = useSelectCard();
  const {transaction} = useTransaction();
  const date = new Date();
  const router = useRouter();

  const handlePushToDashboard = () => {
    router.push("/dashboard");
    setCardId(0);
  };

  const handleDownloadReceipt = () => {
    console.log("✅ Descargando comprobante...");
    downloadReceiptPDF("receipt-content");
  };

  return (
    <>
      <section className="flex flex-col gap-5">
        <div className="w-full flex flex-col gap-3 items-center justify-center bg-green py-4 md:py-5 rounded-[8px]">
          <div className="flex items-center w-16">
            <CheckIcon className="fill-black w-16" />
          </div>

          <h2 className="font-bold text-base md:text-2xl text-black">
            {showAddMoneyPage
              ? "Ya cargamos el dinero en tu cuenta"
              : "Ya realizamos tu pago"}
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
              <p className="font-bold text-xl text-green">
                {showAddMoneyPage && <span>Cuenta propia</span>}
                {showPayServicePage && (
                  <span>
                    {/* Aca deberia decir el nombre del servicio. Que es el atributo "name" del servicio o el atributo "destination de la operacion." */}
                  </span>
                )}
              </p>
            </div>

            {showAddMoneyPage && (
              <div className="flex flex-col gap-1">
                <p className="font-normal text-base">Digital Money House</p>
                <p className="font-normal text-xs">CVU {accountData.cvu}</p>
              </div>
            )}

            {showPayServicePage && (
              <div className="flex flex-col gap-1">
                <p className="font-normal text-base">Tarjeta</p>
                <p className="font-normal text-xs">
                  {/* Aca deberian mostrarse el numero de la tarjeta que se utilizo para pagar el servicio donde solo se muestran visibles los ultimos 4 digitos.  */}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="w-full xl:justify-items-end flex-col gap-5 flex md:flex-row-reverse">
          <div className="w-full xl:w-[233px]">
            <button
              onClick={handleDownloadReceipt}
              className="w-full bg-green border-green h-[50px] md:h-[64px] flex p-5 font-bold text-center text-dark1 items-center rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] justify-center"
            >
              Descargar comprobante
            </button>
            {/* HTML oculto del comprobante */}
            <div id="receipt-content" className="hidden">
              <h2 className="text-lg font-bold mb-4 text-black">
                Comprobante de operación
              </h2>
              <p>
                <strong>Fecha:</strong> 24 de abril de 2025
              </p>
              <p>
                <strong>Monto:</strong> $1.000,00
              </p>
              <p>
                <strong>Medio de pago:</strong> Tarjeta terminada en 1234
              </p>
              <p>
                <strong>Servicio:</strong> Agua Río Cuarto
              </p>
              <p>
                <strong>ID Transacción:</strong> #ABC123456
              </p>
            </div>
          </div>
          <div className="w-full xl:w-[233px]">
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

export default SuccessMessage;
