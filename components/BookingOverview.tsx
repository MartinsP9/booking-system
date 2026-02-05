"use client";

import { useRouter } from "next/navigation";
import { OverviewProps } from "@/lib/types";
import { services, staff } from "@/public/data";
import { UserIcon, EditIcon, CalendarIcon, ClockIcon } from "@/components/icons";

const BookingOverview = ({ serviceId, personId, date, time }: OverviewProps) => {
    const router = useRouter();
    const service = services.find((s) => serviceId == s.id);
    const serviceName = service?.title;
    const servicePrice = service?.price;

    const person = staff.find((p) => p.id == personId);
    const personName = person?.name ?? "";
    const personLanguages = person?.languages?.join(", ") ?? "";

    // Format date for display
    const formatDate = (dateString: string) => {
        if (!dateString) return "";
        try {
            const [year, month, day] = dateString.split("-");
            const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
            return date.toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
            });
        } catch {
            return dateString;
        }
    };

    const formattedDate = formatDate(date || "");
    const reservedTime = time;

    return (
        <div className="w-full max-w-560px mx-auto bg-white rounded-2xl shadow-lg border border-neutral-200 overflow-hidden">
            {/* Header */}
            <div className="px-6 py-5 bg-linear-to-r from-neutral-50 to-white border-b border-neutral-200">
                <h2 className="text-xl font-bold text-neutral-900">Booking Summary</h2>
                <p className="text-sm text-neutral-600 mt-1">Review your appointment details</p>
            </div>

            {/* Booking Info */}
            <div className="px-6 py-6 space-y-5">
                {/* Staff Member */}
                <div className="flex items-start justify-between group">
                    <div className="flex items-start gap-4 flex-1">
                        <div className="shrink-0 w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center">
                            <UserIcon className="w-5 h-5 text-neutral-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-xs font-medium text-neutral-500 uppercase tracking-wide mb-1">Staff Member</p>
                            <p className="text-base font-semibold text-neutral-900 truncate">{personName || "Not selected"}</p>
                            {personLanguages && <p className="text-sm text-neutral-600 mt-1">{personLanguages}</p>}
                        </div>
                    </div>
                    <button
                        onClick={() => router.push("/staff")}
                        className="p-2 hover:bg-neutral-100 rounded-full transition-colors shrink-0"
                        aria-label="Edit staff member"
                    >
                        <EditIcon className="w-5 h-5 text-neutral-600" />
                    </button>
                </div>

                {/* Date & Time */}
                <div className="flex items-start justify-between group">
                    <div className="flex items-start gap-4 flex-1">
                        <div className="shrink-0 w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center">
                            <CalendarIcon className="w-5 h-5 text-neutral-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-xs font-medium text-neutral-500 uppercase tracking-wide mb-1">Date & Time</p>
                            {formattedDate ? (
                                <>
                                    <p className="text-base font-semibold text-neutral-900">{formattedDate}</p>
                                    {reservedTime && (
                                        <div className="flex items-center gap-2 mt-1">
                                            <ClockIcon className="w-4 h-4 text-neutral-500" />
                                            <p className="text-sm text-neutral-600 font-medium">{reservedTime}</p>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <p className="text-base text-neutral-500">Not selected</p>
                            )}
                        </div>
                    </div>
                    <button
                        onClick={() => router.push("/date")}
                        className="p-2 hover:bg-neutral-100 rounded-full transition-colors shrink-0"
                        aria-label="Edit date and time"
                    >
                        <EditIcon className="w-5 h-5 text-neutral-600" />
                    </button>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-neutral-200"></div>

            {/* Services & Total */}
            <div className="px-6 py-6 bg-neutral-50">
                <h3 className="text-sm font-semibold text-neutral-900 mb-4 uppercase tracking-wide">Service Details</h3>

                <div className="space-y-3">
                    {/* Service Item */}
                    {serviceName ? (
                        <div className="flex items-center justify-between py-2">
                            <div className="flex-1">
                                <p className="text-base font-medium text-neutral-900">{serviceName}</p>
                            </div>
                            <span className="text-base font-semibold text-neutral-900">{servicePrice} €</span>
                        </div>
                    ) : (
                        <p className="text-sm text-neutral-500 py-2">No service selected</p>
                    )}

                    {/* Total */}
                    <div className="border-t border-neutral-300 pt-4 mt-4">
                        <div className="flex items-center justify-between">
                            <p className="text-base font-bold text-neutral-900">Total</p>
                            <span className="text-xl font-bold text-neutral-900">{servicePrice ? `${servicePrice} €` : "—"}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingOverview;
