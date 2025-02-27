import SearchIcon from "@/components/common/Icons/SearchIcon";
import InputText from "@/components/form/InputText";
import Link from "../../../../node_modules/next/link";
import ArrowIcon from "@/components/common/Icons/ArrowIcon";
import { TransactionType } from "@/types/transaction.types";



type TransactionsListProps = {
  transactionsList: TransactionType[];
  showActivityPage : boolean;


};

const TransactionsList = async ({
  transactionsList,
  showActivityPage,
  showAddMoneyPage,

}: TransactionsListProps) => {



  const getWeekday = (dateString: string): string => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { weekday: "long" };
    return new Intl.DateTimeFormat("es-ES", options).format(date);
  };

  const orderTransactionsList = transactionsList.toReversed().slice(0, 10);

  return (
    <>
      <section className="w-full ">
        <div className="w-full flex xl:px-12 flex-row md:px-8 md:gap-8 p-5 bg-white  border border-select1 rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] h-[64px] items-center gap-5">
          <SearchIcon />
          <input
            className="text-black/50 text-base md:text-[18px] w-full"
            type="text"
            placeholder="Buscar en tu actividad"
          />
        </div>
      </section>

      <section className="w-full justify-start items-start p-5 md:py-10 md:px-8 xl:px-12 flex flex-col rounded-[10px] bg-white text-dark1 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]  ">
        <h2 className="w-full text-base font-bold border-b border-gray1 md:border-dark1 pb-5">
          Tu actividad
        </h2>
        {orderTransactionsList.length === 0 ? (
          <p className="text-gray-500 mt-4">No hay movimientos en tu cuenta.</p>
        ) : (
          <ul className="w-full">
            {orderTransactionsList.map((transaction) => (
              <li
                className="w-full flex flex-row justify-between items-start md:items-center border-b border-gray1 md:border-dark1 py-3 md:py-4"
                key={transaction.id}
              >
                <div className="flex flex-row gap-2.5 md:gap-4 items-center">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-green rounded-full" />
                  <h4 className="text-sm md:text-base text-dark1">{transaction.type} </h4>
                </div>

                <div className="flex flex-col gap-0  items-end text-dark1">
                  <span className="text-sm md:text-[16px] break-words">
                    {transaction.amount.toLocaleString("es-AR", {
                      style: "currency",
                      currency: "ARS",
                    })}
                  </span>
                  <span className=" text-xs md:text-sm opacity-40 ">
                    {getWeekday(transaction.dated)}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}

            {!showActivityPage && (
					<Link
						href="/dashboard/activity"
						className=" w-full flex flex-row justify-between mt-7"
					>

						<p className="text-xs md:text-base text-dark1 font-bold">
							Ver toda tu actividad
						</p>
						<ArrowIcon className="fill-black/70 w-4" />
					</Link>
				)}
      </section>
    </>
  );
};

export default TransactionsList;
