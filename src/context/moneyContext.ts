// import {create} from 'zustand'

// export const useSelectCard = create(set => ({
//   cardId: 0,
//   setCardId: cardId => set({cardId}),
// }))

// export const useSetAmount = create(set => ({
//     amount: 0,
//     setAmount: amount => set({amount}),
//   }))


//   export const useSelectService = create(set => ({
//     serviceId: 0,
//     setServiceId: serviceId => set({serviceId}),
//   }))

import { create } from "zustand";

type UseSelectCard = {
  cardId: number;
  setCardId: (cardId: number) => void;
};

export const useSelectCard = create<UseSelectCard>((set) => ({
  cardId: 0,
  setCardId: (cardId) => set({ cardId }),
}));

type UseSetAmount = {
  amount: number;
  setAmount: (amount: number) => void;
};

export const useSetAmount = create<UseSetAmount>((set) => ({
  amount: 0,
  setAmount: (amount) => set({ amount }),
}));

type UseSelectService = {
  serviceId: string;
  setServiceId: (serviceId: string) => void;
};

export const useSelectService = create<UseSelectService>((set) => ({
  serviceId: "",
  setServiceId: (serviceId) => set({ serviceId }),
}));

  