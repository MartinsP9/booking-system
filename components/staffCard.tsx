import { Person } from "@/lib/types";

const StaffCard = ({ name, languages, onPersonClick, isActive = false }: Person) => {
    const initials =
        name
            ?.split(" ")
            .filter(Boolean)
            .slice(0, 2)
            .map((p) => p[0]?.toUpperCase())
            .join("") ?? "";

    return (
        <div
            className={`w-full max-w-[420px] bg-white rounded-2xl shadow-md overflow-hidden mx-auto flex flex-col
                transition-all duration-200 cursor-pointer
                ${isActive ? "border-2 border-emerald-500" : "border-2 border-white"}`}
            onClick={onPersonClick}
        >
            <div className="w-full h-48 bg-neutral-100 flex items-center justify-center">
                <div className="h-20 w-20 rounded-full bg-white shadow-sm border border-neutral-200 flex items-center justify-center">
                    <span className="text-neutral-900 text-2xl font-semibold">{initials}</span>
                </div>
            </div>

            <div className="p-5 flex flex-col gap-3">
                <h1 className="text-xl font-semibold text-neutral-900 text-center">{name}</h1>

                <div className="border-t border-neutral-300"></div>

                <p className="text-sm text-neutral-700 text-center leading-relaxed">{languages}</p>
            </div>
        </div>
    );
};

export default StaffCard;
