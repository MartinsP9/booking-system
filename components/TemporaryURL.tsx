"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const TemporaryURL = () => {
    const currentURL = usePathname() || "/";
    return (
        <Link href="/" className="flex justify-center bg-neutral-900 w-full text-center">
            {currentURL}
        </Link>
    );
};

export default TemporaryURL;
