"use client";
import CheckIcon from "@/components/common/Icons/CheckIcon";
import { TransactionType } from "@/types/transaction.types";
import { formatDated } from "@/utils/formatDated";
import { useRouter } from "next/navigation";

type ActivityDetailProps = {
  transaction: TransactionType;
};

const ActivityDetail = ({ transaction }: ActivityDetailProps) => {
  console.log(transaction);
  const router = useRouter();

  const handlePushToDashboard = () => {
    router.push("/dashboard");
  };

  const handleDownloadReceipt = () => {
    console.log("✅ Descargando comprobante...");
  };

  return (
    <section className="flex flex-col gap-5">
      <div className="bg-dark1 flex flex-col gap-3 rounded-[8px] p-6 md:px-8 md:gap-6 xl:gap-0 md:py-8">
        <div className=" flex flex-col gap-5 md:gap-8 pb-4 md:mx-6 md:flex-col-reverse xl:flex-row xl:justify-between xl:items-center md:border-b md:border-gray1">
          {/* titulo */}
          <div className="w-full flex flex-row items-center gap-3">
            <div className="flex items-center w-7">
              <CheckIcon className="fill-green w-7" />
            </div>
            <h2 className="w-full font-bold text-xl text-green md:text-2xl">
              Aprobada
            </h2>
          </div>
          <div className="w-full md:hidden border-b border-gray1"></div>
          {/* fecha */}
          <div className="w-full md:text-right">
            <p className="font-normal text-xs md:text-base">
              Creada el {formatDated(transaction.dated)}
            </p>
          </div>
        </div>

        {/* informacion de la trasacción */}
        <div className="flex flex-col gap-6 mb-4 mt-2 md:pl-6 xl:mt-4">
          {/* monto */}
          <div className="flex flex-col gap-1">
            <p className="text-sm font-bold">Transferencia de dinero</p>
            <p className="font-bold text-xl text-green">
              {transaction.amount.toLocaleString("es-AR", {
                style: "currency",
                currency: "ARS",
              })}
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <p className="font-normal text-xs">Le transferiste a</p>
            <p className="font-bold text-xl text-green">
              {transaction.destination} Cuenta propia
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <p className="font-normal text-xs">Número de operación</p>
            <p className="font-normal text-base text-green">
              {transaction.id}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full xl:justify-items-end flex-col gap-5 flex md:flex-row-reverse">
        <div className="w-full xl:w-1/4">
          <button
            onClick={handleDownloadReceipt}
            className="w-full bg-green border-green h-[50px] md:h-[64px] flex p-5 font-bold text-center text-dark1 items-center rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] justify-center"
          >
            Descargar comprobante
          </button>
        </div>
        <div className="w-full xl:w-1/4">
          <button
            onClick={handlePushToDashboard}
            className="w-full bg-button1 border-button1 border-green h-[50px] md:h-[64px] flex p-5 font-bold text-center text-dark1 items-center rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] justify-center"
          >
            Ir al inicio
          </button>
        </div>
      </div>
    </section>
  );
};

export default ActivityDetail;
