"use client";

import PickDate from "@/components/DatePicker";
import PickTime from "@/components/TimePicker";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useBookingStore } from "@/lib/useBookingStore";

export default function Date() {
    const router = useRouter();
    const serviceId = useBookingStore((state) => state.serviceId);
    const personId = useBookingStore((state) => state.personId);
    const contextDate = useBookingStore((state) => state.date);
    const contextTime = useBookingStore((state) => state.time);
    const setContextDate = useBookingStore((state) => state.setDate);
    const setContextTime = useBookingStore((state) => state.setTime);
    const [date, setDate] = useState<string | null>(null);
    const [time, setTime] = useState<string | null>(null);
    const [hasSelectedDate, setHasSelectedDate] = useState(false);
    const [hasSelectedTime, setHasSelectedTime] = useState(false);

    useEffect(() => {
        if (!serviceId) {
            router.push("/service");
        } else if (!personId) {
            router.push("/staff");
        }
    }, [serviceId, personId, router]);

    useEffect(() => {
        if (date) {
            setContextDate(date);
            setHasSelectedDate(true);
        }
    }, [date, setContextDate]);

    useEffect(() => {
        if (time) {
            setContextTime(time);
            setHasSelectedTime(true);
        }
    }, [time, setContextTime]);

    return (
        <main className="min-h-screen bg-neutral-200 pt-10 flex justify-center">
            <div className="w-full max-w-150 bg-neutral-50 flex flex-col rounded-t-3xl min-h-[calc(100vh-2.5rem)]">
                <div className="p-5">
                    <h1 className="text-black text-2xl font-bold">Barber Shop Number Uno</h1>
                </div>
                <div className="border-t border-neutral-300"></div>

                <div className="flex-1 flex flex-col gap-6 p-5 pb-28">
                    <PickDate
                        value={date}
                        onChange={(d) => {
                            setDate(d);
                            // If date changes, clear any previously selected time
                            setTime(null);
                            setContextTime(null);
                            setHasSelectedTime(false);
                        }}
                    />
                    {date && (
                        <div className="mt-2">
                            <PickTime selectedDate={date} time={time} setTime={(t) => {
                                setTime(t);
                                if (t) setHasSelectedTime(true);
                            }} />
                        </div>
                    )}
                </div>
                <Footer date={hasSelectedDate ? date : null} time={hasSelectedTime ? time : null} />
            </div>
        </main>
    );
}
