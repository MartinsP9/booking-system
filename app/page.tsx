import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex min-h-screen w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-black sm:items-start">
                <h1 className="text-3xl">Links to pages</h1>
                <ul>
                    <li className="mt-20">
                        <Link href="/service">To Service</Link>
                    </li>
                    <li className="mt-20">
                        <Link href="/staff">To Staff</Link>
                    </li>
                    <li className="mt-20">
                        <Link href="/overview">To Overview</Link>
                    </li>
                </ul>
            </main>
        </div>
    );
}
// !!! This automatically rederects to the services page so that we can try out how it actually works

//
// import { redirect } from "next/navigation";
//
// export default function Home() {
//     redirect("/service"); // or whatever page you want
// }
