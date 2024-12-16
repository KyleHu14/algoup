"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import { NAVLINKS } from "@/data/nav-links"
import MobileLinkProps from "./MobileLink"
import NavLink from "./NavLink"

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
        <header className="fixed top-0 z-50 sm:sticky">
            <nav className="flex h-14 w-full items-center justify-between border-b-2 border-b-algoup-accent-dark bg-white px-5 shadow-md sm:h-20 sm:flex-row xl:px-14 2xl:px-28">
                <Link
                    href="/"
                    className="relative h-7 w-28 xl:block xl:h-[45px] xl:w-[170px] 2xl:h-[65px] 2xl:w-[260px]"
                >
                    <Image
                        src="/logo-full.jpg"
                        fill={true}
                        alt="Company Logo"
                    />
                </Link>

                {/* Burger Menu */}

                <button
                    onClick={() => setShowMobileLinks(!showMobileLinks)}
                    className="md:hidden"
                >
                    {showMobileLinks ? (
                        <X className="h-8 w-8 text-zinc-700" />
                    ) : (
                        <Menu className="h-8 w-8 text-zinc-700" />
                    )}
                </button>

                {/* Mobile Links */}
                {showMobileLinks ? (
                    <div className="fixed left-0 top-[3.5rem] flex w-full flex-col items-center justify-center gap-2 border-b-2 border-b-algoup-accent bg-white p-3 md:hidden">
                        {NAVLINKS.map((linkData, index) => {
                            if (linkData.text === "Contact Us") {
                                return (
                                    <Link key={index} href={linkData.link}>
                                        <Button
                                            size="sm"
                                            className="bg-algoup-accent text-sm text-white"
                                        >
                                            Contact Us
                                        </Button>
                                    </Link>
                                )
                            }
                            return (
                                <MobileLinkProps
                                    key={index}
                                    onClick={() =>
                                        setShowMobileLinks(!showMobileLinks)
                                    }
                                    link={linkData.link}
                                    text={linkData.text}
                                />
                            )
                        })}
                    </div>
                ) : null}

                {/* Desktop Links */}
                <div className="hidden flex-row items-center justify-center gap-3 md:flex xl:gap-6 3xl:gap-8">
                    {NAVLINKS.map((linkData, index) => {
                        if (linkData.text === "Contact Us") {
                            return (
                                <Link href={linkData.link}>
                                    <Button
                                        size="sm"
                                        className="bg-algoup-accent px-2 py-0 text-[11px] text-white hover:bg-algoup-accent-dark lg:text-lg"
                                    >
                                        Contact Us
                                    </Button>
                                </Link>
                            )
                        }
                        return (
                            <NavLink
                                key={index}
                                link={linkData.link}
                                text={linkData.text}
                            />
                        )
                    })}
                </div>
            </nav>
        </header>
    )
}
