import ArrowIcon from "@/components/common/Icons/ArrowIcon";
import PlusIcon from "@/components/common/Icons/PlusIcon";
import { CardType } from "@/types/card.types";
import React from "react";
import ImageCard from "./ImageCard";

type AddCardProps = {
  accountId: number;
  cardsList: CardType[];
}

const AddCard = ({accountId, cardsList} : AddCardProps ) => {

const imageCard = {
	number: "4556365487965698",
	expiry: "1028",
	cvc: "265",
	name: "MELISA LUCIA FERRARIS",
}

  return (
 
    <section className="w-full justify-start items-start p-6 md:py-10 md:px-8 flex flex-col rounded-[10px] bg-white text-dark1 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]  xl:p-12">
    <ImageCard
 	number={imageCard.number || ""}
   name={imageCard.name || ""}
   expiry={imageCard.expiry || ""}
   cvc={imageCard.cvc || ""}
     />

    
  </section>
 
  );
};

export default AddCard;

