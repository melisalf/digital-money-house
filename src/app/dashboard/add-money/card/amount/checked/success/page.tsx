import SuccessAddMoney from '@/components/dashboard/addMoney/SuccessAddMoney'
import { getAccount } from '@/services/account.service';
import { getTokenFromCookie } from '@/utils/getTokenFromCookie';

const AddMoneySuccessPage = async () => {
  const token = getTokenFromCookie();
  const accountData = await getAccount(token);
  const showAddMoneyPage = true;
  
  return (
    <div>
      <SuccessAddMoney
      showAddMoneyPage = {showAddMoneyPage}
      accountData = {accountData}
      />
    </div>
  )
}

export default AddMoneySuccessPage