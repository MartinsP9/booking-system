"use client";

import { staff } from "@/public/data";
import { getTimeRange, TimeGrid } from "@mantine/dates";
import { useBooking } from "@/lib/BookingContext";
import { services } from "@/public/data";
import { PickTimeProps } from "@/lib/types";

export default function PickTime({ selectedDate, time, setTime }: PickTimeProps) {
    // Don’t allow picking a time before a date is chosen
    if (!selectedDate) return null;

    const { personId, serviceId } = useBooking();
    const person = staff.find((p) => p.id === personId);
    const shiftStart = person?.shiftStart?.[0] ?? "";
    const shiftEnd = person?.shiftEnd?.[0] ?? "";
    const service = services.find((s) => s.id === serviceId);

    // finding the times to disable on the specific date
    const selectedDateArray = person?.bookedTimes;
    // console.log(selectedDateArray);
    const bookedTimesObject = selectedDateArray?.find((d) => d.date == selectedDate);
    const bookedTimes = bookedTimesObject?.reservedTimes;

    // Find shortest offered service for the specific person for the time incrementation
    function getShortestService() {
        const serviceIds = person?.serviceIds;
        let serviceArray: { duration: string }[] = [];
        services.map((service) => {
            if (serviceIds?.includes(service.id)) {
                serviceArray.push(service);
            }
        });
        let duration = serviceArray[0].duration;
        for (let i = 1; i < serviceArray.length; i++) {
            if (serviceArray[i].duration < duration) {
                duration = serviceArray[i].duration;
            }
        }
        return duration;
    }
    const duration = getShortestService();
    

    // If a reserved time can’t be clicked, it also shouldn’t be displayed.
    const toHHmm = (t: string) => t.slice(0, 5);
    const data = getTimeRange({ startTime: shiftStart, endTime: shiftEnd, interval: duration}).map(toHHmm).filter((t) => !bookedTimes?.includes(t));
    return (
        <TimeGrid
            data={data}
            simpleGridProps={{
                type: "container",
                cols: { base: 1, "180px": 2, "320px": 3 },
                spacing: "xs",
            }}
            allowDeselect
            withSeconds={false}
            onChange={setTime}
            value={time}
        />
    );
}

// function WithArray() {
//     return <TimeGrid data={["10:00", "12:00"]} />;
// }
