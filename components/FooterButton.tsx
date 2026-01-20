import Link from "next/link";
import { FooterButtonProps } from "@/lib/types";

const FooterButton = ({ linkTo, contentButton }: FooterButtonProps) => {
    return (
        <Link className="flex items-center justify-center gap-2" href={linkTo}>
            {contentButton}
        </Link>
    );
};

export default FooterButton;
