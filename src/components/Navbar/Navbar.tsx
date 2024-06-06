import Image from "next/image";
import Link from "next/link";

import NavbarLink from "./NavbarLink";

export default function DashboardNavbar() {
    return (
        <nav className="w-ful sticky top-0 z-50 border-b-zinc-300 bg-white py-4 shadow-xl xl:px-14 2xl:px-28">
            <div className="flex justify-between">
                <Image
                    src="/logo.png"
                    width={300}
                    height={10}
                    alt="Company Logo"
                />
                {/* <Link
                    className="flex items-center tracking-widest text-white 2xl:text-[1.7rem]"
                    href="/"
                >
                    ALGOUP
                </Link> */}

                <div className="flex items-center gap-6 xl:gap-8">
                    <NavbarLink link="/" text="Home" />
                    <NavbarLink link="/products" text="Products" />
                    <NavbarLink link="/technology" text="Technology" />
                    <NavbarLink
                        link="/manufacturing"
                        text="Manufacturing Capability"
                    />
                    <NavbarLink link="/service" text="Service" />
                    <NavbarLink link="/news" text="News" />
                    <NavbarLink link="/about" text="About Us" />
                    <button className="= rounded-xl bg-orange-400 p-2 font-semibold text-white transition duration-300 ease-in-out 2xl:text-[1.1rem]">
                        Contact Us
                    </button>
                </div>
            </div>
        </nav>
    );
}
