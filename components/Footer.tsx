"use client";

import FooterButton from "./FooterButton";
import { usePathname } from "next/navigation";
import { FooterSectionProps } from "@/lib/types";
import { services, staff } from "@/public/data";
import { useBooking } from "@/lib/BookingContext";

const Footer = ({ serviceId: serviceIdProp = "", personId: personIdProp = "", date: dateProp = "", time: timeProp = "" }: FooterSectionProps = {}) => {
    const currentURL = usePathname() || "/";
    const { serviceId: serviceIdContext, personId: personIdContext, date: dateContext, time: timeContext } = useBooking();
    
    // Use context values, fallback to props for backward compatibility
    const serviceId = serviceIdContext || serviceIdProp;
    const personId = personIdContext || personIdProp;
    const date = dateContext || dateProp;
    const time = timeContext || timeProp;

    const service = services.find((s) => serviceId == s.id);
    const serviceTimeRaw = service?.duration ?? "";
    const servicePrice = parseInt(service?.price ?? "");

    function timeFormatter(givenTime: string) {
        const [h, m] = givenTime.split(":");
        const hours = parseInt(h, 10);
        const minutes = parseInt(m, 10);
        let textHours = "";
        let textMinutes = "";
        if (hours > 0) {
            textHours = `${hours} h`;
        }
        if (minutes > 0) {
            textMinutes = `${minutes} min`;
        }
        return [textHours, textMinutes];
    }
    const [serviceHours, serviceMinutes] = timeFormatter(serviceTimeRaw);

    const getNextPage: Record<string, [string, string]> = {
        "/service": ["/staff", "Continue"],
        "/staff": ["/date", "Select Date and Time"],
        "/date": ["/overview", "To Overview"],
        "/overview": ["/", "Book"],
    };

    const [link, content] = getNextPage[currentURL] ?? ["/service?", "To Continue"];
    const isReady =
        (currentURL == "/service" && serviceId != "") ||
        (currentURL == "/staff" && personId != "") ||
        (currentURL == "/date" && date != null && time != null) ||
        currentURL == "/overview";

    // Footer should be at the bottom of the screen (viewport), and only pop up when ready.
    if (!isReady) return null;

    return (
        <div
            className="fixed bottom-0 left-0 right-0 z-50 flex justify-center px-0"
        >
            <div
                className="w-full max-w-150 bg-white flex flex-col gap-4 pt-4 pb-6 border-t border-neutral-200 shadow-[0_-4px_20px_rgba(0,0,0,0.12)] rounded-t-3xl"
            >
                {/* Summary Section */}
                <div className="flex flex-row justify-between items-center px-6">
                    <div className="flex flex-col">
                        <span className="text-xs text-neutral-500 uppercase tracking-wide">Duration</span>
                        <span className="text-lg font-bold text-neutral-900">
                            {serviceHours} {serviceMinutes}
                        </span>
                    </div>
                    <div className="flex flex-col items-end">
                        <span className="text-xs text-neutral-500 uppercase tracking-wide">Total</span>
                        <span className="text-lg font-bold text-neutral-900">{servicePrice} €</span>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-neutral-100 mx-6"></div>

                {/* Button */}
                <div className="px-6">
                    <FooterButton linkTo={link} contentButton={content} />
                </div>
            </div>
        </div>
    );
};

export default Footer;
