"use client";

import ServiceCard from "@/components/ServiceCard";
import Footer from "../../components/Footer";
import { services } from "../../public/data";
import { useState } from "react";

const Service = () => {
    const [activeIndex, setActiveIndex] = useState<string>("");
    const chooseThis = (id: string) => {
        console.log(id);
        if (activeIndex == id) {
            setActiveIndex("");
        } else {
            setActiveIndex(id);
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
        <main className="flex max-w-150 m-auto flex-col items-center justify-center py-20 bg-white dark:bg-neutral-950 sm:items-start">
            {
                // something that they could display at the service as an add or something
                /* <div className="m-auto">
                <h1>Haircut</h1>
                <p>Classic or modern look depending on your needs and requests.</p>
            </div>
            <div className="m-auto">
                <h1>Beard trim</h1>
                <p>Razor beard trim using hot and cold towels.</p>
            </div> */
            }
            <div className="w-full flex flex-col justify-center bg-neutral-100 dark:bg-neutral-900 m-auto rounded-xl">
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
        </main>
    );
};

export default Service;
