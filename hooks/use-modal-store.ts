import { create } from "zustand";

export type ModaType = 'createServer';

export interface ModalStore {
    type: ModaType | null;
    isOpen: boolean;
    onOpen: (type: ModaType) => void;
    onClose: () => void
}

export const useModal = create<ModalStore>((set) => ({
    type: null,
    isOpen: false,
    onOpen: (type) => set({isOpen: true, type}),
    onClose: () => set({type: null, isOpen: false})

}))