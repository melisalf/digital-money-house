import CheckAddMoney from '@/components/dashboard/addMoney/checkAddMoney'
import { getAccount } from '@/services/account.service';
import { getTokenFromCookie } from '@/utils/getTokenFromCookie';
import React from 'react'

const AddMoneyConfirmPage = async () => {

  const token = getTokenFromCookie();
  const accountData = await getAccount(token);

  return (
    <div>
         <CheckAddMoney
         accountData = {accountData}
         token = {token}
         />
        
    </div>
  )
}

export default AddMoneyConfirmPage