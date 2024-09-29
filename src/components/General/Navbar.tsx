import Image from "next/image"
import Link from "next/link"

export default function DashboardNavbar() {
    return (
        <nav className="w-ful sticky top-0 z-50 border-b-zinc-100 bg-white py-4 shadow-md xl:px-14 2xl:px-28">
            <div className="flex justify-between">
                <Link
                    href="/"
                    className="relative xl:h-[45px] xl:w-[170px] 2xl:h-[65px] 2xl:w-[260px]"
                >
                    <Image
                        src="/logo-full.jpg"
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
                        <button className="= bg-secondary-color hover:bg-secondary-color-dark rounded-xl p-2 font-semibold text-white transition duration-300 ease-in-out xl:text-lg 2xl:text-[1.1rem]">
                            Contact Us
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

interface NavbarLinkProps {
    text: string
    link: string
}

function NavbarLink({ text, link }: NavbarLinkProps) {
    return (
        <Link
            className="hover:text-secondary-color font-semibold text-black transition duration-300 ease-in-out xl:text-lg 2xl:text-[1.2rem]"
            href={link}
        >
            {text}
        </Link>
    )
}
