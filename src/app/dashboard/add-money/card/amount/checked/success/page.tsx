import SuccessAddMoney from '@/components/dashboard/addMoney/SuccessAddMoney'
import { getAccount } from '@/services/account.service';
import { getTokenFromCookie } from '@/utils/getTokenFromCookie';

const AddMoneySuccessPage = async () => {
  const token = getTokenFromCookie();
  const accountData = await getAccount(token);
  
  return (
    <div>
      <SuccessAddMoney
      accountData = {accountData}
      />
    </div>
  )
}

export default AddMoneySuccessPage