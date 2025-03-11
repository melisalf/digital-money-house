import AddCard from '@/components/dashboard/cards/AddCard'
import { getAccount } from '@/services/account.service';
import { getAllCards } from '@/services/cards.service';
import { getTokenFromCookie } from '@/utils/getTokenFromCookie';
import React from 'react'

const NewCardPage =  async () => {
 
  const token = getTokenFromCookie();
  const accountData = await getAccount(token);



  return (
    <div>
      <AddCard
      accountId={accountData.id}
      token = {token}
      />

    </div>
  )
}

export default NewCardPage