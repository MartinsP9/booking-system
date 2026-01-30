"use client";

import ServiceCard from "@/components/ServiceCard";
import Footer from "../../components/Footer";
import { services } from "../../public/data";
import { useState } from "react";
import { useBooking } from "@/lib/BookingContext";

const Service = () => {
    const [activeIndex, setActiveIndex] = useState<string>("");
    const { setServiceId } = useBooking();
    
    const chooseThis = (id: string) => {
        console.log(id);
        if (activeIndex == id) {
            setActiveIndex("");
            setServiceId(null);
        } else {
            setActiveIndex(id);
            setServiceId(id);
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
                    {services.map((card, index: number) => (
                        <ServiceCard
                            key={index}
                            id={card.id}
                            onCardClick={() => chooseThis(card.id)}
                            title={card.title}
                            text={card.text}
                            image={card.image}
                            imagealt={card.imagealt}
                            price={card.price}
                            isActive={activeIndex == card.id}
                        />
                    ))}
                </div>
                <Footer />
            </div>
        </main>
    );
};

export default Service;
