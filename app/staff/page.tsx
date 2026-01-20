"use client";

import Footer from "../../components/Footer";
import { staff } from "@/public/data";
import StaffCard from "@/components/staffCard";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const Staff = () => {
    const searchParams = useSearchParams();
    const serviceId = searchParams.get("selectedId") ?? "";
    const availableStaff = staff.filter((person) => person.serviceIds.includes(serviceId));

    const [activeIndex, setActiveIndex] = useState<string>("");
    const chooseThis = (id: string) => {
        console.log(id);
        if (activeIndex == id) {
            setActiveIndex("");
        } else {
            setActiveIndex(id);
        }
    };
    return (
        <main className="flex w-full flex-col items-center justify-center py-20 bg-white dark:bg-black sm:items-start">
            <div className="m-auto flex flex-col gap-20">
                {availableStaff.map((person) => (
                    <StaffCard
                        key={person.id}
                        id={person.id}
                        name={person.name}
                        languages={person.languages}
                        serviceIds={person.serviceIds}
                        onPersonClick={() => chooseThis(person.id)}
                        isActive={activeIndex == person.id}
                    />
                ))}
            </div>
            <Footer serviceId={serviceId} personId={activeIndex} />
        </main>
    );
};

export default Staff;
