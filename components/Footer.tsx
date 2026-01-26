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
    };

    const [link, content] = getNextPage[currentURL] ?? ["/service?", "To Continue"];
    if (
        (currentURL == "/service" && serviceId != "") ||
        (currentURL == "/staff" && personId != "") ||
        (currentURL == "/date" && date != null && time != null)
    ) {
        return (
            <div className="fixed bottom-0 px-200 left-0 w-full bg-neutral-900 text-white shadow-lg p-4 flex flex-col  items-center justify-between gap-4 z-50">
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
