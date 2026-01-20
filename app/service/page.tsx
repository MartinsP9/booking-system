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

    return (
        <main className="flex w-full flex-col items-center justify-center py-20 bg-white dark:bg-black sm:items-start">
            <div className="m-auto">
                <h1>Haircut</h1>
                <p>Classic or modern look depending on your needs and requests.</p>
            </div>
            <div className="m-auto">
                <h1>Beard trim</h1>
                <p>Razor beard trim using hot and cold towels.</p>
            </div>
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
        </main>
    );
};

export default Service;
