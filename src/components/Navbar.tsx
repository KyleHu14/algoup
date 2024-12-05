"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function DashboardNavbar() {
    const [showMobileLinks, setShowMobileLinks] = useState(false)

    return (
        /*
            Mobile Navbar
            fixed : fixed at top
            top-0 : starting at top at pos 0
            z-50: so that other elements don't overlap it
            h & w : need to be specified for fixed
        */
        <nav className="fixed top-0 z-50 flex h-14 w-full items-center justify-between border-b-2 border-b-algoup-accent-dark bg-white px-5 shadow-md sm:sticky sm:h-20 sm:flex-row xl:px-14 2xl:px-28">
            <Link
                href="/"
                className="relative h-7 w-28 xl:block xl:h-[45px] xl:w-[170px] 2xl:h-[65px] 2xl:w-[260px]"
            >
                <Image src="/logo-full.jpg" fill={true} alt="Company Logo" />
            </Link>

            {/* Burger Menu */}
            <button
                onClick={() => setShowMobileLinks(!showMobileLinks)}
                className="md:hidden"
            >
                <Menu className="h-8 w-8 text-zinc-700" />
            </button>

            {/* Mobile Links */}
            {showMobileLinks ? (
                <div className="fixed left-0 top-[3.5rem] flex w-full flex-col items-center justify-center gap-2 bg-zinc-200 p-3 md:hidden">
                    <MobileLinkProps
                        onClick={() => setShowMobileLinks(!showMobileLinks)}
                        link="/ai"
                        text="AI"
                    />
                    <MobileLinkProps
                        onClick={() => setShowMobileLinks(!showMobileLinks)}
                        link="/products"
                        text="Products"
                    />
                    <MobileLinkProps
                        onClick={() => setShowMobileLinks(!showMobileLinks)}
                        link="/manufacturing"
                        text="Manufacturing Capability"
                    />
                    <MobileLinkProps
                        onClick={() => setShowMobileLinks(!showMobileLinks)}
                        link="/news"
                        text="News"
                    />
                    <MobileLinkProps
                        onClick={() => setShowMobileLinks(!showMobileLinks)}
                        link="/about"
                        text="About Us"
                    />
                    <Link href="/contact">
                        <Button
                            size="sm"
                            className="bg-algoup-accent text-sm text-white"
                        >
                            Contact Us
                        </Button>
                    </Link>
                </div>
            ) : null}

            {/* Desktop Links */}
            <div className="hidden flex-row items-center justify-center gap-3 md:flex xl:gap-6 3xl:gap-8">
                <NavbarLink link="/ai" text="AI" />
                <NavbarLink link="/products" text="Products" />
                <NavbarLink
                    link="/manufacturing"
                    text="Manufacturing Capability"
                />
                <NavbarLink link="/news" text="News" />
                <NavbarLink link="/about" text="About Us" />
                <Link href="/contact">
                    <Button
                        size="sm"
                        className="bg-algoup-accent px-2 py-0 text-[11px] text-white hover:bg-algoup-accent-dark lg:text-lg"
                    >
                        Contact Us
                    </Button>
                </Link>
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
            className="text-center text-[11px] text-black transition duration-300 ease-in-out hover:text-algoup-accent-dark md:text-sm lg:text-lg"
            href={link}
        >
            {text}
        </Link>
    )
}

interface MobileLinkProps {
    onClick: React.MouseEventHandler<HTMLAnchorElement>
    text: string
    link: string
}

function MobileLinkProps({ text, link, onClick }: MobileLinkProps) {
    return (
        <Link
            onClick={onClick}
            className="text-center text-lg font-semibold text-black"
            href={link}
        >
            {text}
        </Link>
    )
}
