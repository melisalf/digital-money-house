import TransactionsList from '@/components/dashboard/home/TransactionsList'
import { getAccount } from '@/services/account.service';
import { getAllTransactions } from '@/services/transactions.service';
import { getTokenFromCookie } from '@/utils/getTokenFromCookie';
import React from 'react'



const ActivityPage =  () => {

	const showActivityPage = true;


  return (
    <div>
      <TransactionsList
      showActivityPage={showActivityPage} />
    </div>
  )
}

export default ActivityPage