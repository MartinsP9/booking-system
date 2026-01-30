"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { OverviewProps } from "@/lib/types";
import { services, staff } from "@/public/data";

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
                day: "numeric" 
            });
        } catch {
            return dateString;
        }
    };

    const formattedDate = formatDate(date || "");
    const reservedTime = time;

    return (
        <div className="w-full max-w-[560px] mx-auto bg-white rounded-2xl shadow-lg border border-neutral-200 overflow-hidden">
            {/* Header */}
            <div className="px-6 py-5 bg-gradient-to-r from-neutral-50 to-white border-b border-neutral-200">
                <h2 className="text-xl font-bold text-neutral-900">Booking Summary</h2>
                <p className="text-sm text-neutral-600 mt-1">Review your appointment details</p>
            </div>

            {/* Booking Info */}
            <div className="px-6 py-6 space-y-5">
                {/* Staff Member */}
                <div className="flex items-start justify-between group">
                    <div className="flex items-start gap-4 flex-1">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center">
                            <svg 
                                className="w-5 h-5 text-neutral-600" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
                                />
                            </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-xs font-medium text-neutral-500 uppercase tracking-wide mb-1">
                                Staff Member
                            </p>
                            <p className="text-base font-semibold text-neutral-900 truncate">
                                {personName || "Not selected"}
                            </p>
                            {personLanguages && (
                                <p className="text-sm text-neutral-600 mt-1">
                                    {personLanguages}
                                </p>
                            )}
                        </div>
                    </div>
                    <button
                        onClick={() => router.push("/staff")}
                        className="p-2 hover:bg-neutral-100 rounded-full transition-colors flex-shrink-0"
                        aria-label="Edit staff member"
                    >
                        <svg 
                            className="w-5 h-5 text-neutral-600" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" 
                            />
                        </svg>
                    </button>
                </div>

                {/* Date & Time */}
                <div className="flex items-start justify-between group">
                    <div className="flex items-start gap-4 flex-1">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center">
                            <svg 
                                className="w-5 h-5 text-neutral-600" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
                                />
                            </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-xs font-medium text-neutral-500 uppercase tracking-wide mb-1">
                                Date & Time
                            </p>
                            {formattedDate ? (
                                <>
                                    <p className="text-base font-semibold text-neutral-900">
                                        {formattedDate}
                                    </p>
                                    {reservedTime && (
                                        <div className="flex items-center gap-2 mt-1">
                                            <svg 
                                                className="w-4 h-4 text-neutral-500" 
                                                fill="none" 
                                                stroke="currentColor" 
                                                viewBox="0 0 24 24"
                                            >
                                                <path 
                                                    strokeLinecap="round" 
                                                    strokeLinejoin="round" 
                                                    strokeWidth={2} 
                                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                                                />
                                            </svg>
                                            <p className="text-sm text-neutral-600 font-medium">
                                                {reservedTime}
                                            </p>
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
                        className="p-2 hover:bg-neutral-100 rounded-full transition-colors flex-shrink-0"
                        aria-label="Edit date and time"
                    >
                        <svg 
                            className="w-5 h-5 text-neutral-600" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" 
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-neutral-200"></div>

            {/* Services & Total */}
            <div className="px-6 py-6 bg-neutral-50">
                <h3 className="text-sm font-semibold text-neutral-900 mb-4 uppercase tracking-wide">
                    Service Details
                </h3>

                <div className="space-y-3">
                    {/* Service Item */}
                    {serviceName ? (
                        <div className="flex items-center justify-between py-2">
                            <div className="flex-1">
                                <p className="text-base font-medium text-neutral-900">
                                    {serviceName}
                                </p>
                            </div>
                            <span className="text-base font-semibold text-neutral-900">
                                {servicePrice} €
                            </span>
                        </div>
                    ) : (
                        <p className="text-sm text-neutral-500 py-2">No service selected</p>
                    )}

                    {/* Total */}
                    <div className="border-t border-neutral-300 pt-4 mt-4">
                        <div className="flex items-center justify-between">
                            <p className="text-base font-bold text-neutral-900">Total</p>
                            <span className="text-xl font-bold text-neutral-900">
                                {servicePrice ? `${servicePrice} €` : "—"}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingOverview;
