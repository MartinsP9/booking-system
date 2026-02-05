"use client";

import ServiceCard from "@/components/ServiceCard";
import Footer from "../../components/Footer";
import { services } from "../../public/data";
import { useState } from "react";
import { useBookingStore } from "@/lib/useBookingStore";

const Service = () => {
    const [activeIndex, setActiveIndex] = useState<string>("");
    const setServiceId = useBookingStore((state) => state.setServiceId);
    
    const chooseThis = (id: string) => {
        if (activeIndex == id) {
            setActiveIndex("");
            setServiceId(null);
        } else {
            setActiveIndex(id);
            setServiceId(id);
        }
    };
    //  someting to sort by services...
    //     const rawServices = services;
    //     let usableServices = rawServices.filter((service) => {
    //         if (service.title.includes("Hair") || service.title.includes("hair")) {
    //
    //         }
    //
    //     });

    return (
<<<<<<< HEAD
        <main className="flex w-full flex-col items-center justify-center py-20 bg-white dark:bg-neutral-950 sm:items-start">
            {/* <div className="m-auto">
                <h1>Haircut</h1>
                <p>Classic or modern look depending on your needs and requests.</p>
            </div>
            <div className="m-auto">
                <h1>Beard trim</h1>
                <p>Razor beard trim using hot and cold towels.</p>
            </div> */}
            <div className="max-w-150 flex flex-col justify-center bg-neutral-100 dark:bg-neutral-900 m-auto p-10 rounded-xl">
                <div className="p-5">
                    <h1 className="text-3xl text-black dark:text-white">Which service are you looking to book?</h1>
                </div>
                <div className="border-t border-gray-200 mb-6"></div>
                <div className="m-auto flex flex-col gap-20">
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
                <Footer serviceId={activeIndex} />
            </div>
=======
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
>>>>>>> d18f5376eaf05f1e7fdd4f9535d7984e78485d56
        </main>
    );
};

export default Service;
