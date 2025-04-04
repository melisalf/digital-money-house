import AddCard from '@/components/dashboard/cards/AddCard'
import { getAccount } from '@/services/account.service';
import { getAllCards } from '@/services/cards.service';
import { getTokenFromCookie } from '@/utils/getTokenFromCookie';
import React from 'react'

const NewCardPage =  async () => {
 
  const token = getTokenFromCookie();
  const accountData = await getAccount(token);
  const cardsList = await getAllCards(accountData.id, token);


  return (
    <div className='xl:p-5'>
      <AddCard
      account_id={accountData.id}
      token = {token}
      cardsList = {cardsList}
      />
    </div>
  )
}

export default NewCardPage