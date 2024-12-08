import { create } from 'zustand';
import { combine, devtools } from 'zustand/middleware';

import { DialogState, DrawerState } from './types';

export const useDialogStore = create<DialogState>((set, get) => {
  return {
    open: false,
    setOpen: () =>
      set((state) => {
        return { open: !state.open };
      }),
  };
});

export const useDrawerStore = create<DrawerState>((set, get) => {
  return {
    open: false,
    setOpen: () =>
      set((state) => {
        return { open: !state.open };
      }),
  };
});
