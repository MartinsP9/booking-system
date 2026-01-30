"use client";

import { useState } from "react";
import { DatePicker } from "@mantine/dates";
import { Stack, Text } from "@mantine/core";
import { staff } from "@/public/data";
import { PickDateProps } from "@/lib/types";
import { useBooking } from "@/lib/BookingContext";
import { CalendarIcon, ChevronDownIcon } from "@/components/icons";

export default function PickDate({ value, onChange }: PickDateProps) {
    const { personId } = useBooking();
    const person = staff.find((p) => p.id === personId);
    const forwardMonth = new Date();
    forwardMonth.setMonth(forwardMonth.getMonth() + 2);

    // Date picker starts closed
    const [open, setOpen] = useState(false);

    const datesToExclude = (date: any) => {
        const d = new Date(date);
        const dayOfWeek = d.getDay();
        const shifts = person?.shifts;
        const isOffDay = shifts ? shifts[dayOfWeek] === null : false;
        
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        const dateString = `${year}-${month}-${day}`;
        const isOffDate = person?.offDates?.includes(dateString);
        
        return !!(isOffDay || isOffDate);
    };

    const formatDisplayDate = (dateString: string | null | undefined) => {
        if (!dateString) return "Tap to choose a date";
        try {
            const [year, month, day] = dateString.split("-");
            const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
            return date.toLocaleDateString("en-US", { 
                weekday: "long", 
                year: "numeric", 
                month: "long", 
                day: "numeric" 
            });
        } catch {
            return dateString;
        }
    };

    return (
        <div className="w-full max-w-[560px] mx-auto bg-white rounded-2xl shadow-lg border border-neutral-200 overflow-hidden">
            {/* Header */}
            <div className="px-6 py-5 bg-gradient-to-r from-neutral-50 to-white border-b border-neutral-200">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center">
                        <CalendarIcon className="w-5 h-5 text-neutral-600" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-neutral-900">Select Date</h2>
                        <p className="text-sm text-neutral-600 mt-0.5">Choose your preferred appointment date</p>
                    </div>
                </div>
            </div>

            {/* Date Display Button */}
            <div className="px-6 py-6">
                <button
                    type="button"
                    className="w-full rounded-xl border-2 border-neutral-200 bg-white px-4 py-4 text-left text-neutral-900 shadow-sm hover:border-neutral-300 hover:shadow-md transition-all duration-200 flex items-center justify-between group"
                    onClick={() => setOpen(!open)}
                >
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center group-hover:bg-neutral-200 transition-colors">
                            <CalendarIcon className="w-4 h-4 text-neutral-600" />
                        </div>
                        <span className={`text-base font-medium ${value ? "text-neutral-900" : "text-neutral-500"}`}>
                            {formatDisplayDate(value || null)}
                        </span>
                    </div>
                    <ChevronDownIcon className={`w-5 h-5 text-neutral-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
                </button>

                {/* Date Picker */}
                {open && (
                    <div className="mt-6 pb-2">
                        <DatePicker
                            value={value as any}
                            onChange={(d: any) => {
                                if (!d) {
                                    onChange(null);
                                    return;
                                }
                                const dateObj = new Date(d);
                                const year = dateObj.getFullYear();
                                const month = String(dateObj.getMonth() + 1).padStart(2, '0');
                                const day = String(dateObj.getDate()).padStart(2, '0');
                                const formattedDate = `${year}-${month}-${day}`;
                                onChange(formattedDate);
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
                    </div>
                )}
            </div>
        </div>
    );
}
