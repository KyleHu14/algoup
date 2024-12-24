import Image from "next/image"

// Components
import ColumnTitle from "./ColumnTitle"

// Icons
import SocialLink from "./SocialLink"

import ColumnSubTitle from "./ColumnSubTitle"
import ColumnParagraph from "./ColumnParagraph"
import { SOCIALS } from "@/data/socials"

export default function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center gap-4 bg-zinc-100 px-5 py-10 sm:flex-row sm:items-start sm:justify-normal sm:text-left md:px-24 lg:px-40 xl:px-64">
            {/* Col 1 - Logo */}
            <div className="hidden w-full flex-col gap-3 lg:flex">
                <div className="relative h-[40px] w-[150px] xl:h-[55px] xl:w-[230px]">
                    <Image src="/logo-full.png" fill alt="Logo Picture" />
                </div>

                <ColumnParagraph>
                    Always striving for innovation.
                </ColumnParagraph>

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
            </div>
        </footer>
    )
}
