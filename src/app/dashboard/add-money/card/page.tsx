import PlusIcon from "@/components/common/Icons/PlusIcon";
import UserCards from "@/components/dashboard/cards/UserCards";
import SubmitButton from "@/components/form/SubmitButton";
import { getAccount } from "@/services/account.service";
import { getAllCards } from "@/services/cards.service";
import { getTokenFromCookie } from "@/utils/getTokenFromCookie";
import Link from "next/link";

const AddMoneyCardPage = async () => {
  const token = getTokenFromCookie();
  const accountData = await getAccount(token);
  const accountId = accountData.id;
  const cardsList = await getAllCards(accountId, token);

  // TRUE cuando esta en true se muestran todas las tarjetas con un select.
  // FALSE cuando esta en false se muestran todas las tarjetas con un delete.
  const showAddMoneyPage = true;

 


  return (
      <section className="flex flex-col gap-5">
        <div className="bg-dark1 flex flex-col gap-3 rounded-[8px] px-5 py-4 md:px-12 md:py-12">
          <h2 className="font-bold text-xl text-green1 pl-2 pb-4 md:pl-0 md:text-2xl">
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

          <div className="md:w-full md:flex md:flex-col md:gap-3 md:justify-between md:items-center xl:mt-5">
            <Link
              href={"/dashboard/cards/new-card"}
              className="md:w-full flex md:gap-5 pt-4 pb-2"
            >
              <div className="flex items-center justify-start gap-4 md:pt-2 md:pb-3">
                <span className="justify-start">
                  <PlusIcon className="w-7 h-7 md:w-8 md:h-8" />
                </span>
                <p className=" text-green1 font-bold md:text-xl">
                  Nueva tarjeta
                </p>
              </div>
            </Link>
            <div className="hidden md:block md:w-full md:h-[64px] md:flex md:justify-center md:items-center ">
            <button className="w-full p-5 bg-green font-bold text-center items-center text-dark1 rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)]">
              Continuar
            </button>
          </div>
          </div>

        </div>
        
        <div className="w-full h-[50px] flex justify-end md:hidden items-center ">
            <button 
            className="w-1/2  p-5 bg-green font-bold text-center items-center text-dark1 rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)]">
              Continuar
            </button>
        </div>
      </section>

  );
};

export default AddMoneyCardPage;
