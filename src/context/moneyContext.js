import {create} from 'zustand'

export const useSelectCard = create(set => ({
  cardId: 0,
  setCardId: cardId => set({cardId}),
}))

export const useSetAmount = create(set => ({
    amount: 0,
    setAmount: amount => set({amount}),
  }))


  export const useSelectService = create(set => ({
    serviceId: 0,
    setServiceId: serviceId => set({serviceId}),
  }))

  