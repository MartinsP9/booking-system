"use client";

import FooterButton from "./FooterButton";
import { usePathname } from "next/navigation";
import { FooterSectionProps } from "@/lib/types";
import { services, staff } from "@/public/data";

const Footer = ({ serviceId = "", personId = "", date = "", time = "" }: FooterSectionProps) => {
    const currentURL = usePathname() || "/";

    const service = services.find((s) => serviceId == s.id);
    const serviceTimeRaw = service?.duration ?? "";
    const servicePrice = parseInt(service?.price ?? "");

    function timeFormatter(givenTime: string) {
        const [goo, some] = givenTime.split(":");
        const hours = parseInt(goo);
        const minutes = parseInt(some);
        return [hours, minutes];
    }
    const [serviceHours, serviceMinutes] = timeFormatter(serviceTimeRaw);

    const getNextPage: Record<string, [string, string]> = {
        "/service": [`/staff?selectedId=${serviceId}`, "To Staff"],
        "/staff": [`/date?selectedId=${serviceId}&personId=${personId}`, "To Date"],
        "/date": [`/overview?selectedId=${serviceId}&personId=${personId}&date=${date}&time=${time}`, "To Overview"],
        "/overview": [`/`, "Book"],
    };

    const [link, content] = getNextPage[currentURL] ?? ["/service?", "To Continue"];
    if (
        (currentURL == "/service" && serviceId != "") ||
        (currentURL == "/staff" && personId != "") ||
        (currentURL == "/date" && date != null && time != null) ||
        currentURL == "/overview"
    ) {
        return (
            <div className="sticky w-full bottom-0 bg-neutral-900 text-white border-t border-neutral-800 p-4 flex flex-col items-center gap-3">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="text-sm text-gray-400">
                        {serviceHours}h {serviceMinutes}min
                    </span>
                </div>

                <span className="font-semibold text-lg">{servicePrice} €</span>

                <FooterButton linkTo={link} contentButton={content} />
            </div>
        );
    }
    return null;
};

export default Footer;
