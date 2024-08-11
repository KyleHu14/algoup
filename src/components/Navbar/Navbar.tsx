import Image from "next/image"
import Link from "next/link"

import NavbarLink from "./NavbarLink"

export default function DashboardNavbar() {
    return (
        <nav className="w-ful sticky top-0 z-50 border-b-zinc-300 bg-white py-4 shadow-md xl:px-14 2xl:px-28">
            <div className="flex justify-between">
                <Link
                    href="/"
                    className="relative xl:h-[45px] xl:w-[170px] 2xl:h-[65px] 2xl:w-[260px]"
                >
                    <Image
                        src="/logo-full.png"
                        fill={true}
                        alt="Company Logo"
                    />
                </Link>

                {/* <Link
                    className="flex items-center tracking-widest text-white 2xl:text-[1.7rem]"
                    href="/"
                >
                    ALGOUP
                </Link> */}

                <div className="flex items-center xl:gap-6 3xl:gap-8">
                    <NavbarLink link="/" text="Home" />
                    <NavbarLink link="/technology" text="Technology" />
                    <NavbarLink link="/products" text="Products" />
                    <NavbarLink
                        link="/manufacturing"
                        text="Manufacturing Capability"
                    />
                    <NavbarLink link="/service" text="Service" />
                    <NavbarLink link="/news" text="News" />
                    <NavbarLink link="/about" text="About Us" />
                    <Link href="/contact">
                        <button className="= rounded-xl bg-orange-400 p-2 font-semibold text-white transition duration-300 ease-in-out hover:bg-orange-500 xl:text-lg 2xl:text-[1.1rem]">
                            Contact Us
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}
