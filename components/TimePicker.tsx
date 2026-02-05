"use client";

import { staff } from "@/public/data";
import { getTimeRange, TimeGrid } from "@mantine/dates";
import { useBookingStore } from "@/lib/useBookingStore";
import { services } from "@/public/data";
import { PickTimeProps } from "@/lib/types";
import { ClockIcon } from "@/components/icons";

export default function PickTime({ selectedDate, time, setTime }: PickTimeProps) {
    // Don't allow picking a time before a date is chosen
    if (!selectedDate) return null;

    const personId = useBookingStore((state) => state.personId);
    const serviceId = useBookingStore((state) => state.serviceId);
    const person = staff.find((p) => p.id === personId);
    const [y, m, d] = selectedDate ? selectedDate.split("-").map(Number) : [0, 0, 0];
    const dayOfWeek = selectedDate ? new Date(y, m - 1, d).getDay() : 0;
    const shift = person?.shifts?.[dayOfWeek];
    const shiftStart = shift?.start ?? "";
    const shiftEnd = shift?.end ?? "";
    const service = services.find((s) => s.id === serviceId);

    // finding the times to disable on the specific date
    const bookedTimes = person?.events
        ?.filter((event) => event.start.startsWith(selectedDate ?? ""))
        ?.map((event) => event.start.split("T")[1].slice(0, 5));

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

    // If a reserved time can't be clicked, it also shouldn't be displayed.
    const toHHmm = (t: string) => t.slice(0, 5);
    const data = getTimeRange({ startTime: shiftStart, endTime: shiftEnd, interval: duration })
        .map(toHHmm)
        .filter((t) => !bookedTimes?.includes(t));

    return (
        <div className="w-full max-w-560px mx-auto bg-white rounded-2xl shadow-lg border border-neutral-200 overflow-hidden">
            {/* Header */}
            <div className="px-6 py-5 bg-linear-to-r from-neutral-50 to-white border-b border-neutral-200">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center">
                        <ClockIcon className="w-5 h-5 text-neutral-600" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-neutral-900">Select Time</h2>
                        <p className="text-sm text-neutral-600 mt-0.5">Choose your preferred appointment time</p>
                    </div>
                </div>
            </div>

            {/* Time Grid */}
            <div className="px-6 py-6">
                {data.length > 0 ? (
                    <TimeGrid
                        data={data}
                        simpleGridProps={{
                            type: "container",
                            cols: { base: 2, "180px": 3, "320px": 4 },
                            spacing: "sm",
                        }}
                        allowDeselect
                        withSeconds={false}
                        onChange={setTime}
                        value={time}
                    />
                ) : (
                    <div className="text-center py-8">
                        <p className="text-neutral-500 text-sm">No available times for this date</p>
                        <p className="text-neutral-400 text-xs mt-1">Please select a different date</p>
                    </div>
                )}
            </div>
        </div>
    );
}
