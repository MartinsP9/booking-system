"use client";

import { staff } from "@/public/data";
import { getTimeRange, TimeGrid } from "@mantine/dates";
import { useSearchParams } from "next/navigation";

export default function PickTime() {
    const searchParams = useSearchParams();
    const personID = searchParams.get("personId") ?? "";
    const person = staff.find((p) => p.id === personID);
    const shiftStart = person?.shiftStart?.[0] ?? "";
    const shiftEnd = person?.shiftEnd?.[0] ?? "";
    const allOfTheTimes = getTimeRange({ startTime: "10:00", endTime: "14:00", interval: "00:40" });
    const reservedTimes = ["10:40", "11:40", "14:40"];
    // const availableTimes = allOfTheTimes.filter((time) => {
    //     if()
    // })

    return (
        <TimeGrid
            data={getTimeRange({ startTime: shiftStart, endTime: shiftEnd, interval: "00:20" })}
            disableTime={["10:20", "11:00", "13:00"]}
            simpleGridProps={{
                type: "container",
                cols: { base: 1, "180px": 2, "320px": 3 },
                spacing: "xs",
            }}
            allowDeselect
            withSeconds={false}
        />
    );
}

// function WithArray() {
//     return <TimeGrid data={["10:00", "12:00"]} />;
// }
