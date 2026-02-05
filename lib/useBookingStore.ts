import { create } from 'zustand'

interface BookingState {
  serviceId: string | null
  personId: string | null
  date: string | null
  time: string | null
}

interface BookingActions {
  setServiceId: (id: string | null) => void
  setPersonId: (id: string | null) => void
  setDate: (date: string | null) => void
  setTime: (time: string | null) => void
}

type BookingStore = BookingState & BookingActions

export const useBookingStore = create<BookingStore>()((set) => ({
  serviceId: null,
  personId: null,
  date: null,
  time: null,
  setServiceId: (id) => set({ serviceId: id }),
  setPersonId: (id) => set({ personId: id }),
  setDate: (date) => set({ date }),
  setTime: (time) => set({ time }),
}))
