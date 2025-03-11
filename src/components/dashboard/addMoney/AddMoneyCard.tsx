"use client";
import PlusIcon from "@/components/common/Icons/PlusIcon";
import { CardType } from "@/types/card.types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import UserCards from "../cards/UserCards";

type AddMoneyCardProps = {
  cardsList: CardType[];
  accountId: number;
  showAddMoneyPage: boolean;
  token: string;
};

const AddMoneyCard = ({
  cardsList,
  accountId,
  showAddMoneyPage,
  token,
}: AddMoneyCardProps) => {
  const router = useRouter();

  const handleSelectCard = () => {
    router.push("/dashboard/add-money/card/amount");
  };

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

        <div className="md:flex md:flex-col xl:flex-row md:gap-3 md:justify-between md:items-start xl:items-center xl:mt-5">
          <Link
            className="w-2/4 flex fle-col md:gap-5 pt-4 pb-2"
            href={"/dashboard/cards/new-card"}
          >
            <div className="flex items-center justify-start gap-4 md:pt-2 md:pb-3">
              <span className="justify-start">
                <PlusIcon className="w-7 h-7 md:w-8 md:h-8" />
              </span>
              <p className=" text-green1 font-bold md:text-xl">Nueva tarjeta</p>
            </div>
          </Link>
          <div className="hidden md:w-full xl:w-2/4 md:flex  md:h-[64px]  xl:justify-end md:items-center ">
            <button
              onClick={handleSelectCard}
              className="disabled p-5 bg-green md:w-full xl:w-[233px] font-bold text-center items-center text-dark1 rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)]"
            >
              Continuar
            </button>
          </div>
        </div>
      </div>

      <div className="w-full h-[50px] flex justify-end md:hidden  ">
        <button
        onClick={handleSelectCard}
         className="w-1/2 h-[50px] flex p-5 bg-green font-bold text-center text-dark1 items-center justify-center rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)]">
          Continuar
        </button>
      </div>
    </section>
  );
};

export default AddMoneyCard;
