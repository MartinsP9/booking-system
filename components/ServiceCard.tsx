// "use client";
import { ServiceCardProps } from "@/lib/types";

const ServiceCard = ({ onCardClick, title, image, imagealt, text, price, isActive = false }: ServiceCardProps) => {
    console.log(image);
    // return (
    //     <div
    //         className={`
    //             max-w-xs bg-neutral-800 rounded-xl shadow p-4 flex flex-col gap-2
    //             transition-all duration-200 transform cursor-pointer
    //             ${isActive ? "border-2 border-blue-500 scale-105" : "border border-transparent scale-100"}
    //         `}
    //         onClick={onCardClick}
    //     >
    //         <img className="w-full h-48 object-cover rounded-lg" src={`/${image}`} alt={imagealt} />
    //         {/* <svg>
    //             {image},{imagealt}
    //         </svg> */}
    //         <h1 className="text-lg font-semibold text-white">{title}</h1>
    //         <p className=" text-sm text-white">{text}</p>
    //         <span className="text-base font-medium text-white">{price} $</span>
    //     </div>
    // );
    return (
        <div
            className={`max-w-380px bg-white rounded-2xl shadow-md overflow-hidden mx-5 flex flex-col
                transition-all duration-200 transform cursor-pointer
                ${isActive ? "border-2 border-emerald-500 scale-97" : "border-2 border-white scale-95"}`}
            onClick={onCardClick}
        >
            <div className="w-full h-48 bg-neutral-100 flex items-center justify-center">
                <img src={`/${image}`} alt={imagealt} className="h-full w-full object-cover" />
            </div>

            <div className="p-5 flex flex-col gap-3">
                <h1 className="text-xl font-semibold text-neutral-900 text-center">{title}</h1>

                <div className="border-t border-neutral-300"></div>

                <p className="text-sm text-neutral-700 text-center leading-relaxed">{text}</p>

                <span className="text-lg font-semibold text-neutral-900 text-center mt-2">{price} $</span>
            </div>
        </div>
    );
};

export default ServiceCard;
