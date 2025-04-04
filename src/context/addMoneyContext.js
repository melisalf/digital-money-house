import {create} from 'zustand'

export const useSelectCard = create(set => ({
  cardId: 0,
  setCardId: cardId => set({cardId}),
}))

export const useSetAmount = create(set => ({
    amount: 0,
    setAmount: amount => set({amount}),
  }))
  

  