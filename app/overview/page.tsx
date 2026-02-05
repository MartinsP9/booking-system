"use client";

import BookingOverview from "@/components/BookingOverview";
import ClientForm from "@/components/ClientForm";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useBookingStore } from "@/lib/useBookingStore";

const Overview = () => {
    const router = useRouter();
    const serviceId = useBookingStore((state) => state.serviceId);
    const personId = useBookingStore((state) => state.personId);
    const date = useBookingStore((state) => state.date);
    const time = useBookingStore((state) => state.time);

    useEffect(() => {
        if (!serviceId) {
            router.push("/service");
        } else if (!personId) {
            router.push("/staff");
        }else if (!date || !time) {
            router.push("/date");
        }
    }, [serviceId, personId, date, time, router]);

    return (
        <main className="min-h-screen bg-neutral-200 pt-10 flex justify-center">
            <div className="w-full max-w-150 bg-neutral-50 flex flex-col rounded-t-3xl min-h-[calc(100vh-2.5rem)]">
                <div className="p-5">
                    <h1 className="text-black text-2xl font-bold">Barber Shop Number Uno</h1>
                </div>
                <div className="border-t border-neutral-300"></div>
        
                <div className="flex-1 flex flex-col gap-6 p-5 pb-10">
                    <BookingOverview 
                        serviceId={serviceId || ""} 
                        personId={personId || ""} 
                        date={date || ""} 
                        time={time || ""} 
                    />
                    <ClientForm />
                </div>
            </div>
        </main>
    );
};

export default Overview;
