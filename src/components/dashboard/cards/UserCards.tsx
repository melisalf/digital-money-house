"use client";
import InputRadio from "@/components/form/InputRadio";
import { deleteCardId } from "@/services/cards.service";
import { CardType } from "@/types/card.types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast, Toaster } from "sonner";
import { useSelectCard } from "@/context/moneyContext";

type CardsListProps = {
  cardsList: CardType[];
  accountId: number;
  showAddMoneyPage?: boolean;
  token: string;
};
const UserCards = ({
  cardsList,
  accountId,
  showAddMoneyPage,
  token,
}: CardsListProps) => {
  const [cards, setCards] = useState(cardsList);
  const { cardId, setCardId } = useSelectCard();
  const router = useRouter();
  

  const handleSelectCard = (card: CardType) => {
    setCardId(card.id);
    toast.success(`Se selecciono la tarjeta terminada en: ${card.number_id.toString().slice(-4)}`);
    console.log(cardId);
  };

  const handleDeleteCard = async (card_id: number) => {
    try {
      console.log("Intentando eliminar tarjeta con ID:", card_id);
      await deleteCardId(accountId, card_id, token);

      // Filtramos la tarjeta eliminada del estado
      setCards((prevCards) => prevCards.filter((card) => card.id !== card_id));
      router.refresh();
      toast.success("Tarjeta eliminada con éxito");

    } catch (error) {
      console.error("Error al eliminar la tarjeta:", error);
      toast.error("Error al eliminar la tarjeta");
    }
  };

  return (
    <section className="w-full justify-start items-start p-6 md:py-10 md:px-8 flex flex-col rounded-[10px] bg-white text-dark1 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]  xl:p-12">
      <h2 className="w-full text-base font-bold border-b border-dark1/30 md:border-dark1 pb-3 md:pb-4">
        Tus tarjetas
      </h2>
      {cards.length === 0 ? (
        <p className="text-gray-500 mt-4">No tienes tarjetas asociadas.</p>
      ) : (
        <>
          <Toaster
            position="bottom-right"
            toastOptions={{
              className: "text-dark2 bg-green border-green",
            }}
          />
          <ul className="w-full">
            {cards.map((card) => (
              <li className="w-full flex flex-row justify-between items-center border-b border-dark1/30 md:border-dark1 py-4"
                key={card.id}
              >
                <div className="flex flex-row gap-3 md:gap-4 items-center">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-green rounded-full" />
                  <h4 className="text-sm md:text-base text-dark1">
                    {" "}
                    Terminada en {card.number_id.toString().slice(-4)}{" "}
                  </h4>
                </div>

                {!showAddMoneyPage && (
                  <div className="flex flex-col gap-0  items-end text-dark1">
                    <button onClick={() => handleDeleteCard(card.id)}>
                      <span className="text-[12px] font-extrabold md:text-base">
                        Eliminar
                      </span>
                    </button>
                  </div>
                )}

                {showAddMoneyPage && (
                  <InputRadio
                    type="radio"
                    name="card_id"
                    value={card.id.toString()}
                    checked={cardId === card.id}
                    onChange={() => handleSelectCard(card)}
                    inputClassName=""
                    wrappedClassName="flex items-center relative"
                  />
                )}

              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
};

export default UserCards;

