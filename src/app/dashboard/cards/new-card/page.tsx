import AddCard from '@/components/dashboard/cards/AddCard'
import { getAccount } from '@/services/account.service';
import { getAllCards } from '@/services/cards.service';
import { getTokenFromCookie } from '@/utils/getTokenFromCookie';
import React from 'react'

const NewCardPage =  async () => {
 
  const token = getTokenFromCookie();
  const accountData = await getAccount(token);
  const accountId = accountData.id;
  const cardsList = await getAllCards(accountId, token);

  return (
    <div>
      <AddCard
      accountId={accountId}
      cardsList={cardsList}/>

    </div>
  )
}

export default NewCardPage