"use client";

import { useState, useCallback, createContext, useContext, ReactNode } from "react";

interface ToastContextType {
    showToast: (message: string) => void;
}

const ToastContext = createContext<ToastContextType>({ showToast: () => { } });

export function useToast() {
    return useContext(ToastContext);
}

export function ToastProvider({ children }: { children: ReactNode }) {
    const [toast, setToast] = useState<{ message: string; id: number } | null>(null);

    const showToast = useCallback((message: string) => {
        const id = Date.now();
        setToast({ message, id });
        setTimeout(() => {
            setToast((prev) => (prev?.id === id ? null : prev));
        }, 2500);
    }, []);

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            {toast && (
                <div key={toast.id} className="toast-container">
                    <div className="toast-message">
                        {toast.message}
                    </div>
                </div>
            )}
        </ToastContext.Provider>
    );
}
