"use client";

import BookingOverview from "@/components/BookingOverview";
import ClientForm from "@/components/ClientForm";
import Footer from "@/components/Footer";
import PriceOverview from "@/components/PriceOverview";
import { useSearchParams } from "next/navigation";

const Overview = () => {
    const searchParams = useSearchParams();
    const serviceId = searchParams.get("selectedId") ?? "";
    const personId = searchParams.get("personId") ?? "";
    const date = searchParams.get("date") ?? "";
    const time = searchParams.get("time") ?? "";
    return (
        <div>
            <BookingOverview serviceId={serviceId} personId={personId} date={date} time={time} />
            <ClientForm />
            <PriceOverview />
        </div>
    );
};

export default Overview;
