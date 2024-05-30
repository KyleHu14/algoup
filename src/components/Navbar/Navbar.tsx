import Image from "next/image";
import Link from "next/link";

import NavbarLink from "./NavbarLink";

export default function DashboardNavbar() {
    return (
        <nav className="sticky top-0 z-50 w-full bg-zinc-900 xl:px-14 2xl:px-28">
            <div className="flex justify-between px-5 py-6">
                <Link
                    className="flex items-center tracking-widest text-white 2xl:text-[1.7rem]"
                    href="/"
                >
                    ALGOUP
                </Link>

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
                    <button className="rounded-lg bg-white p-2 font-semibold text-black transition duration-300 ease-in-out hover:bg-zinc-300 2xl:text-[1.1rem]">
                        Contact Us
                    </button>
                </div>
            </div>
        </nav>
    );
}
