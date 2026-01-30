"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type BookingContextType = {
    serviceId: string | null;
    personId: string | null;
    date: string | null;
    time: string | null;
    setServiceId: (id: string | null) => void;
    setPersonId: (id: string | null) => void;
    setDate: (date: string | null) => void;
    setTime: (time: string | null) => void;
};

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
    const [serviceId, setServiceId] = useState<string | null>(null);
    const [personId, setPersonId] = useState<string | null>(null);
    const [date, setDate] = useState<string | null>(null);
    const [time, setTime] = useState<string | null>(null);

    return (
        <BookingContext.Provider
            value={{
                serviceId,
                personId,
                date,
                time,
                setServiceId,
                setPersonId,
                setDate,
                setTime,
            }}
        >
            {children}
        </BookingContext.Provider>
    );
}

export function useBooking() {
    const context = useContext(BookingContext);
    if (context === undefined) {
        throw new Error("useBooking must be used within a BookingProvider");
    }
    return context;
}
