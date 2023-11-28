"use client";

import { useEffect, useState } from "react";

import Modal from "@/components/Modal";

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
            <Modal />
        </>
    )   
};

export default ModalProvider;