// components/common/SuccessOperation.tsx
"use client";
import CheckIcon from "@/components/common/Icons/CheckIcon";
import { TransactionType } from "@/types/transaction.types";
import { downloadReceiptPDF } from "@/utils/downloadReceiptPDF";
import { formatDated } from "@/utils/formatDated";
import { useRouter } from "next/navigation";

type Props = {
  transaction: TransactionType;
  operationType: "addMoney" | "payService" | "addCard";
};

const SuccessOperation = ({ transaction, operationType }: Props) => {
  const router = useRouter();

  const handlePushToDashboard = () => {
    router.push("/dashboard");
  };

  const handleDownloadReceipt = () => {
    downloadReceiptPDF("receipt-content");
  };

  const formattedAmount = transaction.amount.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
  });

  return (
    <>
      <section className="flex flex-col gap-5">
        <div className="w-full flex flex-col gap-3 items-center justify-center bg-green py-4 md:py-5 rounded-[8px]">
          <CheckIcon className="fill-black w-16" />
          <h2 className="font-bold text-base md:text-2xl text-black">
            {operationType === "addMoney"
              ? "Ya cargamos el dinero en tu cuenta"
              : "Ya realizamos tu pago"}
          </h2>
        </div>

        <div className="bg-dark1 flex flex-col gap-3 rounded-[8px] p-6 md:px-8 md:gap-6 xl:gap-0 md:py-8">
          <div className="flex flex-col gap-6 mb-4 mt-2 xl:mt-4 md:ml-6">
            <div className="flex flex-col gap-1">
              <p className="font-normal text-xs">{formatDated(transaction.dated)}</p>
              <p className="font-bold text-xl text-green">{formattedAmount}</p>
            </div>

            <div className="flex flex-col gap-1">
              <p className="font-normal text-xs">Para</p>
              <p className="font-bold text-xl text-green">
                {operationType === "addMoney" ? "Cuenta propia" : transaction.description}
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <p className="font-normal text-base">Medio de pago</p>
              <p className="font-normal text-xs">
                Tarjeta terminada en {transaction.origin?.slice(-4)}
              </p>
            </div>
          </div>
        </div>

        {/* Botones */}
        <div className="w-full xl:justify-items-end flex-col gap-5 flex md:flex-row-reverse">
          <button
            onClick={handleDownloadReceipt}
            className="w-full md:w-[233px] bg-green text-dark1 font-bold py-3 rounded-[10px] shadow"
          >
            Descargar comprobante
          </button>
          <button
            onClick={handlePushToDashboard}
            className="w-full md:w-[233px] bg-button1 text-dark1 font-bold py-3 rounded-[10px] shadow"
          >
            Ir al inicio
          </button>
        </div>

        {/* HTML OCULTO PARA PDF */}
        <div id="receipt-content" className="hidden">
          <h2>Comprobante de operación</h2>
          <p><strong>Fecha:</strong> {formatDated(transaction.dated)}</p>
          <p><strong>Monto:</strong> {formattedAmount}</p>
          <p><strong>Medio de pago:</strong> Tarjeta terminada en {transaction.origin?.slice(-4)}</p>
          <p><strong>Servicio:</strong> {transaction.description}</p>
          <p><strong>ID Transacción:</strong> #{transaction.id}</p>
        </div>
      </section>
    </>
  );
};

export default SuccessOperation;
