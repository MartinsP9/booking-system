"use client";

import { BookingProvider } from "@/lib/BookingContext";

export default function BookingProviderWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    return <BookingProvider>{children}</BookingProvider>;
}
