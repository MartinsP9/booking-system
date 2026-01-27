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
        "/service": [`/staff?selectedId=${serviceId}`, "Continue"],
        "/staff": [`/date?selectedId=${serviceId}&personId=${personId}`, "Select Date and Time"],
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
            <div
                className="
                sticky bottom-0 w-full bg-white h-40
                flex flex-col justify-start gap-5 pt-5
                border-t border-neutral-200 shadow-[0_-4px_12px_rgba(0,0,0,0.20)]
            "
            >
                <div className="flex flex-row justify-between px-10">
                    <div className="">
                        <span className="text-neutral-400 text-md">
                            {serviceHours} {serviceMinutes}
                        </span>
                    </div>
                    <span className="text-black">{servicePrice} €</span>
                </div>
                <FooterButton linkTo={link} contentButton={content} />
            </div>
        );
    }
    return (
        <div
            className="
                w-full bg-neutral-50 h-40 mt-2
                flex items-center justify-center
                text-neutral-300 text-sm
            "
        >
            <span>Select one to continue</span>
        </div>
    );
};

export default Footer;
