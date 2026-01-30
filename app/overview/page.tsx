"use client";

import BookingOverview from "@/components/BookingOverview";
import ClientForm from "@/components/ClientForm";
import Footer from "@/components/Footer";
import PriceOverview from "@/components/PriceOverview";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useBooking } from "@/lib/BookingContext";

const Overview = () => {
    const router = useRouter();
    const { serviceId, personId, date, time } = useBooking();

    useEffect(() => {
        if (!serviceId) {
            router.push("/service");
        }
    }, [serviceId, router]);

    return (
        <div>
            <BookingOverview serviceId={serviceId || ""} personId={personId || ""} date={date || ""} time={time || ""} />
            <ClientForm />
            <PriceOverview />
            <Footer />
        </div>
    );
};

export default Overview;
