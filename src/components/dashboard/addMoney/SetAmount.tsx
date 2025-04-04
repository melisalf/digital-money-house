"use client";
import { useSetAmount } from "@/context/addMoneyContext";
import { clsx } from "clsx";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { toast, Toaster } from "sonner";


const SetAmount = () => {
  const router = useRouter();
  const {amount, setAmount}  = useSetAmount()
 
  const checkAddAmount = () => {
      const amountNumber = Number(amount);
      if (!amountNumber || amountNumber <= 0 ) {
        toast.error("Ingrese un importe mayor a $0 para continuar.");
        return;
      } 
      redirectCheckAddMoneyPage(amountNumber);
    };

    const redirectCheckAddMoneyPage = (amountNumber: Number) => {
      if (amountNumber > 0) {
        setAmount(amountNumber)
        console.log(amount)
        router.push(`/dashboard/add-money/card/amount/checked`);
      }
    };

  const onChangeSetAmount = (event : any) => {
    const value = event.target.value;
    setAmount(value);
  };



  return (
    <>
     <Toaster
    position="bottom-right"
    toastOptions={{
      className: "text-dark2 bg-green border-green",
    }}
  />
    <section className="flex flex-col gap-5">
     
     <div className="bg-dark1 flex flex-col gap-3 rounded-[8px] px-6 py-4 md:px-8 md:gap-6 md:py-6 xl:py-8 xl:px-12">
       <h2 className="font-bold text-xl text-green w-3/4 md:w-full md:pr-2 pb-3 md:pt-5 xl:pt-0 md:text-2xl">
         ¿Cuánto querés ingresar a la cuenta?
       </h2>

       <form>
         <input
         name="amount"
           type="number"
           value={amount}
           min={1}
           max={1000000}
           placeholder="$0.00"
           onChange={onChangeSetAmount}
           className="w-full h-[50px] md:h-[64px] xl:w-[360px] p-5 text-left items-center text-dark1 rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)]"
         />
       </form>

       <div className="md:flex md:flex-col xl:flex-row md:gap-3 md:justify-between md:items-start xl:items-center">
         <div className="hidden md:w-full md:flex  md:h-[64px]  xl:justify-end md:items-center ">
           <button
             onClick={checkAddAmount}
             className={clsx(
               "hidden md:block p-5 bg-button1 md:w-full xl:w-[233px] font-bold text-center items-center text-dark1 rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)]",
               {
                 "bg-green border-green ": amount,
                 "bg-button1 border-button1 cursor-not-allowed": !amount,
               }
             )}
           >
             Continuar
           </button>
         </div>
       </div>
     </div>

     <div className="w-full h-[50px] flex justify-end md:hidden  ">
       <button
         onClick={checkAddAmount}
         className={clsx(
           "w-[165px] h-[50px] flex p-5 font-bold text-center text-dark1 items-center rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] justify-center",
           {
             "bg-green border-green ": amount,
             "bg-button1 border-button1 cursor-not-allowed": !amount,
           }
         )}
       >
         Continuar
       </button>
     </div>
   </section>
    </>
   
  
  );
};

export default SetAmount;
