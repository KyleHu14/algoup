"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import { NAVLINKS } from "@/data/nav-links"
import MobileLinkProps from "./MobileLink"
import NavLink from "./NavLink"

import { Sheet, SheetTrigger, SheetContent } from "../ui/sheet"

export default function Navbar() {
    // const [showMobileLinks, setShowMobileLinks] = useState(false)

    return (
        /*
            Mobile Navbar
            fixed : fixed at top
            top-0 : starting at top at pos 0
            z-50: so that other elements don't overlap it
            h & w : need to be specified for fixed
        */
        // <header
        //     className={`border-b-algoup-accent-dark text-black"} sticky top-0 z-50 w-full border-b-2 bg-white`}
        // >
        //     <nav className="flex h-[75px] items-center justify-between px-5 sm:flex-row xl:px-14 2xl:px-28">
        //         <Link
        //             href="/"
        //             className="relative h-7 w-28 xl:block xl:h-11 xl:w-44 2xl:h-14 2xl:w-56"
        //         >
        //             <Image
        //                 className="object-contain"
        //                 src="/logo-full.png"
        //                 fill={true}
        //                 alt="Company Logo"
        //                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        //             />
        //         </Link>

        //         {/* Burger Menu */}
        //         <button
        //             onClick={() => setShowMobileLinks(!showMobileLinks)}
        //             className="md:hidden"
        //         >
        //             {showMobileLinks ? (
        //                 <X className="h-8 w-8 text-zinc-700" />
        //             ) : (
        //                 <Menu className="h-8 w-8 text-zinc-700" />
        //             )}
        //         </button>

        //         {/* Mobile Links */}
        //         {showMobileLinks ? (
        //             <div className="border-b-algoup-accent fixed left-0 top-[3.5rem] flex w-full flex-col items-center justify-center gap-2 border-b-2 bg-white p-3 md:hidden">
        //                 {NAVLINKS.map((linkData, index) => {
        //                     if (linkData.text === "Contact Us") {
        //                         return (
        //                             <Link key={index} href={linkData.link}>
        //                                 <Button
        //                                     size="sm"
        //                                     className="bg-algoup-accent text-sm text-white"
        //                                 >
        //                                     Contact Us
        //                                 </Button>
        //                             </Link>
        //                         )
        //                     }
        //                     return (
        //                         <MobileLinkProps
        //                             key={index}
        //                             onClick={() =>
        //                                 setShowMobileLinks(!showMobileLinks)
        //                             }
        //                             link={linkData.link}
        //                             text={linkData.text}
        //                         />
        //                     )
        //                 })}
        //             </div>
        //         ) : null}

        //         {/* Desktop Links */}
        //         <div className="3xl:gap-8 hidden flex-row items-center justify-center gap-3 md:flex xl:gap-6">
        //             {NAVLINKS.map((linkData, index) => {
        //                 if (linkData.text === "Contact Us") {
        //                     return (
        //                         <Link key={index} href={linkData.link}>
        //                             <Button
        //                                 size="sm"
        //                                 className="bg-algoup-accent hover:bg-algoup-accent-dark px-2 py-0 text-[11px] text-white lg:text-lg"
        //                             >
        //                                 Contact Us
        //                             </Button>
        //                         </Link>
        //                     )
        //                 }
        //                 return (
        //                     <NavLink
        //                         key={index}
        //                         link={linkData.link}
        //                         text={linkData.text}
        //                     />
        //                 )
        //             })}
        //         </div>
        //     </nav>
        // </header>
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <span className="text-2xl font-bold">algoup</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center space-x-6 md:flex">
                    {NAVLINKS.map((linkData, index) => (
                        <Link
                            key={index}
                            href={linkData.link}
                            className="text-sm font-medium transition-colors hover:text-primary"
                        >
                            {linkData.text}
                        </Link>
                    ))}
                    {/* <ModeToggle /> */}
                </nav>

                {/* Mobile Navigation */}
                <div className="flex items-center space-x-4 md:hidden">
                    {/* <ModeToggle /> */}
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
                        <SheetContent side="right">
                            <nav className="flex flex-col space-y-4">
                                {NAVLINKS.map((linkData, index) => (
                                    <Link
                                        key={index}
                                        href={linkData.link}
                                        className="text-sm font-medium transition-colors hover:text-primary"
                                    >
                                        {linkData.text}
                                    </Link>
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}
