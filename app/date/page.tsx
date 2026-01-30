"use client";

import PickDate from "@/components/DatePicker";
import PickTime from "@/components/TimePicker";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useBooking } from "@/lib/BookingContext";

export default function Date() {
    const router = useRouter();
    const { serviceId, personId, date: contextDate, time: contextTime, setDate: setContextDate, setTime: setContextTime } = useBooking();
    const [date, setDate] = useState<string | null>(contextDate);
    const [time, setTime] = useState<string | null>(contextTime);

    useEffect(() => {
        if (!serviceId) {
            router.push("/service");
        } else if (!personId) {
            router.push("/staff");
        }
    }, [serviceId, personId, router]);

    useEffect(() => {
        setContextDate(date);
    }, [date, setContextDate]);

    useEffect(() => {
        setContextTime(time);
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
                        }}
                    />
                    {date ? <PickTime selectedDate={date} time={time} setTime={setTime} /> : null}
                </div>
                <Footer />
            </div>
        </main>
    );
}
