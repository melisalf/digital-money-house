import {create} from 'zustand'

export const useToken = create(set => ({
  token: '',
  setToken: token => set({token}),
}))
