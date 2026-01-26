import Link from "next/link";
import { FooterButtonProps } from "@/lib/types";

const FooterButton = ({ linkTo, contentButton }: FooterButtonProps) => {
    return (
        <Link className="flex items-center justify-center h-10 mx-10 py-7 gap-2 bg-neutral-900 rounded-2xl text-white" href={linkTo}>
            {contentButton}
        </Link>
    );
};

export default FooterButton;
