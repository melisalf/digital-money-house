import AddMoneyCard from "@/components/dashboard/addMoney/AddMoneyCard";
import { getAccount } from "@/services/account.service";
import { getAllCards } from "@/services/cards.service";
import { getTokenFromCookie } from "@/utils/getTokenFromCookie";

const AddMoneyCardPage = async () => {
  const token = getTokenFromCookie();
  const accountData = await getAccount(token);
  const accountId = accountData.id;
  const cardsList = await getAllCards(accountId, token);

  // TRUE cuando esta en true se muestran todas las tarjetas con un select.
  // FALSE cuando esta en false se muestran todas las tarjetas con un delete.
  const showAddMoneyPage = true;

  return (
    <AddMoneyCard
      cardsList={cardsList}
      accountId={accountId}
      showAddMoneyPage={showAddMoneyPage}
      token={token}
    />
  );
};

export default AddMoneyCardPage;
