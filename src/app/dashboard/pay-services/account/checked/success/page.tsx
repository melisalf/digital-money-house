import SuccessAddMoney from '@/components/dashboard/addMoney/SuccessAddMoney';
import { getAccount } from '@/services/account.service';
import { getTokenFromCookie } from '@/utils/getTokenFromCookie';
import React from 'react'

const PayServicesSuccess = async () => {

  const token = getTokenFromCookie();
  const accountData = await getAccount(token);
  const showPayServicePage = true;

  return (
    <SuccessAddMoney
    accountData = {accountData}
    showPayServicePage = {showPayServicePage}/>
  )
}

export default PayServicesSuccess