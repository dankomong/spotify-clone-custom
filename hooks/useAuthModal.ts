import { create } from "zustand";

interface AuthModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};

// This hook triggers the modal opening
// set comes from the function
const useAuthModal = create<AuthModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default useAuthModal;