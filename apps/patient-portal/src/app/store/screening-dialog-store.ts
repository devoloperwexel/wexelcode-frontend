import { create } from 'zustand';

interface ScreeningDialogState {
  isOpen: boolean;
  openDialog: () => void;
  closeDialog: () => void;
}

export const useScreeningDialogStore = create<ScreeningDialogState>((set) => ({
  isOpen: false,
  openDialog: () => set({ isOpen: true }),
  closeDialog: () => set({ isOpen: false }),
}));
