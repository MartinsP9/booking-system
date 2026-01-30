"use client";

import { useState } from "react";
import { DatePicker } from "@mantine/dates";
import { Stack, Text } from "@mantine/core";
import { staff } from "@/public/data";
import { PickDateProps } from "@/lib/types";
import { useBooking } from "@/lib/BookingContext";

export default function PickDate({ value, onChange }: PickDateProps) {
    // const [value, setValue] = useState<string | null>(null);
    const { personId } = useBooking();
    const person = staff.find((p) => p.id === personId);
    const offDays = person?.offDays ?? [];
    const offDates = person?.offDates ?? [];
    const forwardMonth = new Date();
    forwardMonth.setMonth(forwardMonth.getMonth() + 2);

    // Date picker should be visible immediately
    const [open, setOpen] = useState(true);

    const datesToExclude = (date: string) => {
        const weekend = offDays.includes(new Date(date).getDay());
        const notWorking = offDates.includes(date);
        return weekend || notWorking;
    };

    return (
        <Stack
            gap="sm"
            style={{
                maxWidth: 320,
                margin: "0 auto",
                alignItems: "center",
                textAlign: "center",
                width: "100%",
            }}
        >
            <Text fw={500}>Select a date</Text>

            <button
                type="button"
                className="w-full max-w-xs rounded-xl border border-neutral-300 bg-white px-4 py-3 text-center text-neutral-900 shadow-sm"
                onClick={() => setOpen(true)}
            >
                {value ? value : "Tap to choose a date"}
            </button>

            {open && (
                <DatePicker
                    value={value}
                    onChange={(d) => {
                        if (!d) {
                            onChange(null);
                            return;
                        }
                        onChange(d);
                        setOpen(false);
                    }}
                    excludeDate={datesToExclude}
                    minDate={new Date()}
                    maxDate={forwardMonth}
                    classNames={{
                        day: "datepicker-day",
                    }}
                    allowDeselect={true}
                />
            )}
        </Stack>
    );
}
