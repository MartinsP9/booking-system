// "use client";
import { ServiceCardProps } from "@/lib/types";

const ServiceCard = ({ onCardClick, title, image, imagealt, text, price, isActive = false }: ServiceCardProps) => {
    return (
        <div
            className={`w-full max-w-420px bg-white rounded-2xl shadow-md overflow-hidden mx-auto flex flex-col
                transition-all duration-200 cursor-pointer
                ${isActive ? "border-2 border-emerald-500" : "border-2 border-white"}`}
            onClick={onCardClick}
        >
            <div className="w-full h-48 bg-neutral-100 flex items-center justify-center">
                <img src={`/${image}`} alt={imagealt} className="h-full w-full object-cover" />
            </div>

            <div className="p-5 flex flex-col gap-3">
                <h1 className="text-xl font-semibold text-neutral-900 text-center">{title}</h1>

                <div className="border-t border-neutral-300"></div>

                <p className="text-sm text-neutral-700 text-center leading-relaxed">{text}</p>

                <span className="text-lg font-semibold text-neutral-900 text-center mt-2">{price} €</span>
            </div>
        </div>
    );
};

export default ServiceCard;
