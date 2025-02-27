import Actions from "@/components/dashboard/home/Actions";
import Balance from "@/components/dashboard/home/Balance";
import TransactionsList from "@/components/dashboard/home/TransactionsList";
import { getAccount } from "@/services/account.service";
import { getAllTransactions } from "@/services/transactions.service";
import { getTokenFromCookie } from "@/utils/getTokenFromCookie";

export default async function DashboardPage() {
  const token = getTokenFromCookie();
  const accountData = await getAccount(token);
  const transactionsList = await getAllTransactions(token, accountData.id);

  // TRUE cuando esta en true la lista de transacciones tiene paginacion y filtros.
// FALSE cuando esta en false la lista de transacciones se reduce a las 10 ultimas y boton de "ver toda tu actividad"
  const showActivityPage = false;


  return (
    <>
      <Balance available_amount={accountData.available_amount} />
      <Actions />
      <TransactionsList
        transactionsList={transactionsList}
        showActivityPage={showActivityPage}
     
      />
    </>
  );
}
