"use client";
import PlusIcon from "@/components/common/Icons/PlusIcon";
import { useSelectCard } from "@/context/addMoneyContext";
import { CardType } from "@/types/card.types";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast, Toaster } from "sonner";
import UserCards from "../cards/UserCards";

type SelectCardProps = {
  cardsList: CardType[];
  accountId: number;
  showAddMoneyPage: boolean;
  token: string;
};


const SelectCard = ({
  cardsList,
  accountId,
  showAddMoneyPage,
  token,
}: SelectCardProps) => {
  const router = useRouter();
  const { cardId } = useSelectCard();
  
  const checkSelectCard = () => {
    if (!cardId || cardId === 0 ) {
        toast.error("Por favor selecciona una tarjeta")
        return;
    } else {
      router.push('/dashboard/add-money/card/amount')
    }
}
  return (
    <section className="flex flex-col gap-5">
      <div className="bg-dark1 flex flex-col gap-3 rounded-[8px] p-5 md:px-12 md:py-12">
        <h2 className="font-bold text-xl text-green1 pl-2 pb-3 md:pl-0 md:text-2xl">
          Seleccionar tarjeta
        </h2>

        <div>
          <UserCards
            accountId={accountId}
            cardsList={cardsList}
            showAddMoneyPage={showAddMoneyPage}
            token={token}
          />
        </div>

        <div className="w-full md:flex md:flex-col xl:flex-row md:gap-3 md:justify-between md:items-start xl:items-center xl:mt-5">
          <Link
            className="w-full flex fle-col md:gap-5 pt-4 pb-2"
            href={"/dashboard/cards/new-card"}
          >
            <div className="flex items-center justify-start gap-4 md:pt-2 md:pb-3">
              <span className="justify-start">
                <PlusIcon className="w-7 h-7 md:w-8 md:h-8" />
              </span>
              <p className=" text-green font-bold md:text-xl">Nueva tarjeta</p>
            </div>
          </Link>
          <div className="hidden md:w-full xl:w-2/4 md:flex  md:h-[64px]  xl:justify-end md:items-center ">
            <button
              onClick={checkSelectCard}
              className={clsx(
                "p-5 md:w-full xl:w-[233px] font-bold text-center items-center text-dark1 rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)]",
                {
                  "bg-green border-green ": cardId,
                  "bg-button1 border-button1 cursor-not-allowed": !cardId,
                }
              )}
            >
              Continuar
            </button>
          </div>
        </div>
      </div>

      <div className="w-full mb-5 h-[50px] flex justify-end md:hidden  ">
        <button
        onClick={checkSelectCard}
        className={clsx(
          "p-3 w-[165px] md:p-5 md:w-full xl:w-[233px] font-bold text-dark1 rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)]",
          {
            "bg-green border-green ": cardId,
            "bg-button1 border-button1 cursor-not-allowed": !cardId,
          }
        )}
         > Continuar
        </button>
      </div>
    </section>
  );
};

export default SelectCard;
