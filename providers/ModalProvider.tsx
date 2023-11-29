"use client";

import { useEffect, useState } from "react";

import AuthModal from "@/components/AuthModal";
import UploadModal from "@/components/UploadModal";

const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    // We are doing SSR and modals can cause hydration errors and thus should
    // never render a modal in SSR.
    useEffect(() => {
        setIsMounted(true);
    }, [])

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <AuthModal />
            <UploadModal />
        </>
    )   
};

export default ModalProvider;