"use client";

import ImageCard from "./ImageCard";

type AddCardProps = {
  accountId: number;
  token: string;
};

const AddCard = ({ token, accountId }: AddCardProps) => {
  const imageCardValues = {
    number: "4556365487965698",
    expiry: "1028",
    cvc: "265",
    name: "MELISA LUCIA FERRARIS",
  };

  return (
    <section className="w-full flex flex-col justify-between items-center gap-8 rounded-[10px] p-6  md:p-8 xl:px-12 xl:py-10  bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
   
        <ImageCard
          number={imageCardValues.number || ""}
          name={imageCardValues.name || ""}
          expiry={imageCardValues.expiry || ""}
          cvc={imageCardValues.cvc || ""}
        />
      <div>
        <form className="w-[300px] flex flex-col gap-5">
          <input
            placeholder="Número de la tarjeta*"
            type="text"
            className="w-full p-5 rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] "
          />
          <input
            placeholder="Nombre y apellido*"
            type="text"
            className="w-full p-5 rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)]"
          />
          <input
            placeholder="Fecha de vencimiento*"
            type="text"
            className="w-full p-5 rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)]"
          />
          <input
            placeholder="Código de seguridad*"
            type="text"
            className="w-full p-5 rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)]"
          />
          <button className="w-full p-5 text-dark1 bg-button1 text-base font-bold rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] ">
            Continuar
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddCard;
