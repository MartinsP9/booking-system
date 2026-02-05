"use client";

import Footer from "../../components/Footer";
import { staff } from "@/public/data";
import StaffCard from "@/components/staffCard";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useBookingStore } from "@/lib/useBookingStore";

const Staff = () => {
    const router = useRouter();
    const serviceId = useBookingStore((state) => state.serviceId);
    const setPersonId = useBookingStore((state) => state.setPersonId);
    const availableStaff = staff.filter((person) => serviceId && person.serviceIds.includes(serviceId));

    const [activeIndex, setActiveIndex] = useState<string>("");
    
    useEffect(() => {
        if (!serviceId) {
            router.push("/service");
        }
    }, [serviceId, router]);

    const chooseThis = (id: string) => {
        console.log(id);
        if (activeIndex == id) {
            setActiveIndex("");
            setPersonId(null);
        } else {
            setActiveIndex(id);
            setPersonId(id);
        }
    };
    return (
        <main className="min-h-screen bg-neutral-200 pt-10 flex justify-center">
            <div className="w-full max-w-150 bg-neutral-50 flex flex-col rounded-t-3xl min-h-[calc(100vh-2.5rem)]">
                <div className="p-5">
                    <h1 className="text-black text-2xl font-bold">Barber Shop Number Uno</h1>
                </div>
                <div className="border-t border-neutral-300"></div>

                <div className="flex-1 flex flex-col justify-start gap-5 p-5 pb-28">
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
                <Footer />
            </div>
        </main>
    );
};

export default Staff;
