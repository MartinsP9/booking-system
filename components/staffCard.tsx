import { Person } from "@/lib/types";

const StaffCard = ({ name, languages, onPersonClick, isActive = false }: Person) => {
    return (
        <div
            className={`
                max-w-xs bg-neutral-800 rounded-xl shadow p-4 flex flex-col gap-2
                transition-all duration-200 transform cursor-pointer
                ${isActive ? "border-2 border-blue-500 scale-105" : "border border-transparent scale-100"}
            `}
            onClick={onPersonClick}
        >
            <h1 className="text-lg font-semibold text-white">{name}</h1>
            <p className=" text-sm text-white">{languages}</p>
        </div>
    );
};

export default StaffCard;
