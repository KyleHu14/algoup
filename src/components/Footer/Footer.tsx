import Image from "next/image"

// Components
import SocialLink from "./SocialLink"
import FooterLink from "./FooterLink"

import { SOCIALS } from "@/data/socials"

export default function Footer() {
    return (
        <footer className="flex flex-row items-center justify-between gap-4 bg-zinc-100 px-5 py-10 sm:text-left md:px-24 lg:px-40 xl:px-52">
            {/* Col 1 - Logo */}
            <section className="hidden flex-col gap-3 lg:flex">
                <div className="relative h-[50px] w-[160px] xl:h-[55px] xl:w-[230px]">
                    <Image
                        src="/logo-full.png"
                        className="object-contain"
                        fill
                        alt="Logo Picture"
                    />
                </div>

                <p className="text-xl text-typography-secondary/90">
                    Always striving for innovation.
                </p>

                {/* Col 4 - Social Media */}
                <div className="flex gap-3">
                    {SOCIALS.map((social, index) => {
                        const Icon = social.icon
                        return (
                            <SocialLink key={index} link={social.link}>
                                <Icon />
                            </SocialLink>
                        )
                    })}
                </div>
            </section>

            <section className="flex gap-10">
                <FooterLink href="/contact">Contact Us</FooterLink>
                <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
            </section>
        </footer>
    )
}
