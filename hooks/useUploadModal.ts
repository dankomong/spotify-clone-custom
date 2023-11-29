import { create } from "zustand";

interface UploadModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};

// This hook triggers the modal opening
// set comes from the function
const useUploadModal = create<UploadModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default useUploadModal;