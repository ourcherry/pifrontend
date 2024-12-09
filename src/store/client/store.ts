import { create } from 'zustand';
import { combine, devtools } from 'zustand/middleware';

import {
    CapturedImagesStore,
    CollageStore,
    DialogState,
    DrawerState,
} from './types';

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

export const useCaptureStore = create<CapturedImagesStore<any>>((set) => ({
    capturedImages: [],
    setCapturedImages: (images) => set(() => ({ capturedImages: images })),
}));

export const useCollageStore = create<CollageStore>((set) => ({
    collagePath: '',
    setCollagePath: (path) => set(() => ({ collagePath: path })),
}));
