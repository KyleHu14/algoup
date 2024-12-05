import Image from "next/image"

// Components
import ColumnTitle from "./ColumnTitle"

// Icons
import SocialLinks from "./SocialLink"

import ColumnSubTitle from "./ColumnSubTitle"
import Link from "next/link"
import ColumnParagraph from "./ColumnParagraph"
import FooterLink from "./FooterLink"
import { SOCIALS } from "@/data/socials"

export default function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center gap-4 bg-zinc-100 px-5 py-10 sm:flex-row sm:items-start sm:justify-normal sm:text-left lg:gap-[5rem] lg:px-[5rem] xl:gap-[5rem] xl:px-[7rem] 2xl:gap-20 2xl:px-16">
            {/* Col 1 - Logo */}
            <div className="hidden flex-col lg:flex">
                <div className="relative h-[40px] w-[150px] xl:h-[55px] xl:w-[230px] 2xl:h-[75px] 2xl:w-[317px]">
                    <Image src="/logo-full.jpg" fill alt="Logo Picture" />
                </div>

                <ColumnParagraph className="ml-3 xl:ml-6">
                    Always striving for innovation.
                </ColumnParagraph>
            </div>

            {/* Col 2 - Contact */}
            <div className="flex w-full flex-col gap-1">
                <ColumnTitle text="Contact" />

                {/* Phone Contact Info */}
                <>
                    <ColumnSubTitle>Phone</ColumnSubTitle>
                    <ColumnParagraph>US: +1 202 664 4153</ColumnParagraph>
                    <ColumnParagraph>CN: + 86 182 0190 0625</ColumnParagraph>
                </>

                {/* Email Contact Info */}
                <>
                    <ColumnSubTitle>Email</ColumnSubTitle>
                    <ColumnParagraph>bill@algoupinc.com</ColumnParagraph>
                </>
            </div>

            {/* Col 3 - Navigation */}
            <div className="flex w-full flex-col gap-1">
                <ColumnTitle text="Navigation" />

                <FooterLink href="/ai">AI</FooterLink>
                <FooterLink href="/products">Products</FooterLink>
                <FooterLink href="/manufacturing">
                    Manufacturing Capability
                </FooterLink>
                <FooterLink href="/news">News</FooterLink>
                <FooterLink href="/contact">Contact Us</FooterLink>
            </div>

            {/* Col 4 - Social Media */}
            <div className="flex w-full flex-col gap-3">
                <ColumnTitle text="Social Media" />

                {SOCIALS.map((social) => {
                    const Icon = social.icon
                    return (
                        <SocialLinks link={social.link}>
                            <Icon />
                            <ColumnSubTitle className="group-hover:text-algoup-accent">
                                {social.name}
                            </ColumnSubTitle>
                        </SocialLinks>
                    )
                })}
            </div>
        </footer>
    )
}
