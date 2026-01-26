// "use client";
import { ServiceCardProps } from "@/lib/types";

const ServiceCard = ({ onCardClick, title, image, imagealt, text, price, isActive = false }: ServiceCardProps) => {
    console.log(image);
    return (
        <div
            className={`
                max-w-xs bg-neutral-800 rounded-xl shadow p-4 flex flex-col gap-2
                transition-all duration-200 transform cursor-pointer
                ${isActive ? "border-2 border-blue-500 scale-105" : "border border-transparent scale-100"}
            `}
            onClick={onCardClick}
        >
            <img className="w-full h-48 object-cover rounded-lg" src={`/${image}`} alt={imagealt} />
            {/* <svg>
                {image},{imagealt}
            </svg> */}
            <h1 className="text-lg font-semibold text-white">{title}</h1>
            <p className=" text-sm text-white">{text}</p>
            <span className="text-base font-medium text-white">{price} $</span>
        </div>
    );
};

export default ServiceCard;
