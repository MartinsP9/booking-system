"use client";

import { useState } from "react";
import { DatePicker, TimeGrid } from "@mantine/dates";
import { Stack, Text } from "@mantine/core";
import { staff } from "@/public/data";
import { useSearchParams } from "next/navigation";

export default function PickDate() {
    const [value, setValue] = useState<string | null>(null);
    const searchParams = useSearchParams();
    const personID = searchParams.get("personId") ?? "";
    const person = staff.find((p) => p.id === personID);
    const offDays = person?.offDays ?? [];
    const offDates = person?.offDates ?? [];
    const forwardMonth = new Date();
    forwardMonth.setMonth(forwardMonth.getMonth() + 2);

    const datesToExclude = (date: string) => {
        const weekend = offDays.includes(new Date(date).getDay());
        const working = offDates.includes(date);
        console.log(date);
        // console.log(weekend + " " + working);
        return weekend || working;
    };

    return (
        <Stack gap="sm" style={{ maxWidth: 300 }}>
            <Text fw={500}>Select a date</Text>

            <DatePicker
                value={value}
                onChange={setValue}
                excludeDate={datesToExclude}
                minDate={new Date()}
                maxDate={forwardMonth}
                classNames={{
                    day: "datepicker-day",
                }}
            />
        </Stack>
    );
}
