import { captureImage } from '@/apis';

export interface DialogState {
    open: boolean;
    setOpen: () => void;
}

export interface DrawerState {
    open: boolean;
    setOpen: () => void;
}

export interface CapturedImagesStore<TData> {
    capturedImages: Array<TData>;
    setCapturedImages: (images: Array<TData>) => void;
}

export interface CollageStore {
    collagePath: string;
    setCollagePath: (images: string) => void;
}
