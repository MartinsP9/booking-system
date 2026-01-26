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

    // something that they could display at the service as an add or something
    /* <div className="m-auto">
            <h1>Haircut</h1>
            <p>Classic or modern look depending on your needs and requests.</p>
        </div>
        <div className="m-auto">
            <h1>Beard trim</h1>
            <p>Razor beard trim using hot and cold towels.</p>
        </div> */

    return (
        <main className="bg-neutral-200 pt-10">
            <div className="max-w-150 bg-neutral-50 flex flex-col justify-center m-auto rounded-t-3xl">
                <div className="p-5">
                    <h1 className="text-black text-2xl font-bold">Barber Shop Number Uno</h1>
                </div>
                <div className="border-t border-neutral-300"></div>
                <div className="flex flex-col justify-start gap-5 p-5 mb-5">
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
