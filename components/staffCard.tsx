import { Person } from "@/lib/types";

const StaffCard = ({ name, languages, onPersonClick, isActive = false }: Partial<Person>) => {
    const initials =
        name
            ?.split(" ")
            .filter(Boolean)
            .slice(0, 2)
            .map((p) => p[0]?.toUpperCase())
            .join("") ?? "";

    const languagesDisplay = Array.isArray(languages) ? languages.join(", ") : languages;

    return (
        <div
            className={`w-full max-w-560px bg-white rounded-2xl shadow-md overflow-hidden mx-auto flex flex-row
                transition-all duration-200 cursor-pointer
                ${isActive ? "border-2 border-emerald-500" : "border-2 border-white"}`}
            onClick={onPersonClick}
        >
            {/* Left side - Avatar */}
            <div className="w-24 h-24 shrink-0 bg-neutral-100 flex items-center justify-center">
                <div className="h-16 w-16 rounded-full bg-white shadow-sm border border-neutral-200 flex items-center justify-center">
                    <span className="text-neutral-900 text-lg font-semibold">{initials}</span>
                </div>
            </div>

            {/* Right side - Info */}
            <div className="flex-1 p-5 flex flex-col justify-center gap-2">
                <h1 className="text-lg font-semibold text-neutral-900">{name}</h1>
                <p className="text-sm text-neutral-600 leading-relaxed">{languagesDisplay}</p>
            </div>
        </div>
    );
};

export default StaffCard;
