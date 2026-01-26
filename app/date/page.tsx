"use client";

import PickDate from "@/components/DatePicker";
import PickTime from "@/components/TimePicker";
import Footer from "@/components/Footer";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Date() {
    const [date, setDate] = useState<string | null>(null);
    const [time, setTime] = useState<string | null>(null);

    const searchParams = useSearchParams();
    const serviceId = searchParams.get("selectedId") ?? "";
    const personId = searchParams.get("personId") ?? "";

    return (
        <main style={{ padding: 40 }}>
            <PickDate value={date} onChange={setDate} />
            <PickTime selectedDate={date} time={time} setTime={setTime} />
            <Footer serviceId={serviceId} personId={personId} date={date} time={time} />
        </main>
    );
}
