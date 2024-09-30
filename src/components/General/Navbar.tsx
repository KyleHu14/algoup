import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function DashboardNavbar() {
    return (
        <nav className="sticky top-0 z-50 w-full border-b-zinc-100 bg-white py-4 shadow-md xl:px-14 2xl:px-28">
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
                        <Button className="bg-secondary-color-dark text-xl text-white">
                            Contact Us
                        </Button>
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
            className="font-semibold text-black transition duration-300 ease-in-out hover:text-secondary-color xl:text-lg 2xl:text-[1.2rem]"
            href={link}
        >
            {text}
        </Link>
    )
}
