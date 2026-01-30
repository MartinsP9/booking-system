import Link from "next/link";
import { FooterButtonProps } from "@/lib/types";

const FooterButton = ({ linkTo, contentButton }: FooterButtonProps) => {
    return (
        <Link
            className="w-full flex items-center justify-center text-white font-semibold py-4 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98]"
            style={{ backgroundColor: '#004f3b' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#003d2e'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#004f3b'}
            href={linkTo}
        >
            {contentButton}
        </Link>
    );
};

export default FooterButton;
