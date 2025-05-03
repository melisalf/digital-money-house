import SuccessMessage from '@/components/common/SuccessMessage';
import { getAccount } from '@/services/account.service';
import { getTokenFromCookie } from '@/utils/getTokenFromCookie';
import React from 'react'

const PayServicesSuccess = async () => {

  const token = getTokenFromCookie();
  const accountData = await getAccount(token);
  const showPayServicePage = true;

  return (
    <SuccessMessage
    operationType='payService'
    accountData = {accountData}
    showPayServicePage = {showPayServicePage}/>
  )
}

export default PayServicesSuccess