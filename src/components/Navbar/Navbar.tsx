"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import { NAVLINKS } from "@/data/nav-links"
import MobileLinkProps from "./MobileLink"
import NavLink from "./NavLink"

import {
    Sheet,
    SheetTrigger,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "../ui/sheet"

export default function Navbar() {
    // const [showMobileLinks, setShowMobileLinks] = useState(false)

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95">
            <div className="container flex h-16 items-center justify-between">
                <Link
                    href="/"
                    className="relative h-7 w-28 xl:block xl:h-11 xl:w-44"
                >
                    <Image
                        className="object-contain"
                        src="/logo-full.png"
                        fill={true}
                        alt="Company Logo"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-3 md:flex xl:gap-6">
                    {NAVLINKS.map((linkData, index) => {
                        if (linkData.text === "Contact Us") {
                            return (
                                <Link key={index} href={linkData.link}>
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
                            <Link
                                key={index}
                                href={linkData.link}
                                className="text-sm font-medium transition-colors hover:text-primary lg:text-base"
                            >
                                {linkData.text}
                            </Link>
                        )
                    })}
                </nav>

                {/* Mobile Navigation */}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden"
                        >
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle className="border-b pb-3 text-left text-algoup-accent-dark">
                                Navigation
                            </SheetTitle>
                        </SheetHeader>
                        <nav className="mt-4 flex flex-col gap-3">
                            {NAVLINKS.map((linkData, index) => (
                                <Link
                                    key={index}
                                    href={linkData.link}
                                    className="font-medium transition-colors"
                                >
                                    {linkData.text}
                                </Link>
                            ))}
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}
