import Image from "next/image"

// Components
import ColumnTitle from "./ColumnTitle"

// Icons
import SocialLinks from "./SocialLinks"
import Linkedin from "../Icons/Linkedin"
import Youtube from "../Icons/Youtube"
import X from "../Icons/X"
import Wechat from "../Icons/Wechat"
import Facebook from "../Icons/Facebook"
import Instagram from "../Icons/Instagram"
import ColumnSubTitle from "./ColumnSubTitle"
import Link from "next/link"
import ColumnParagraph from "./ColumnParagraph"

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

                <Link href="/technology">
                    <ColumnSubTitle>Technology</ColumnSubTitle>
                </Link>

                <Link href="/products">
                    <ColumnSubTitle>Products</ColumnSubTitle>
                </Link>

                <Link href="/manufacturing">
                    <ColumnSubTitle>Manufacturing Capability</ColumnSubTitle>
                </Link>

                <Link href="/news">
                    <ColumnSubTitle>News</ColumnSubTitle>
                </Link>

                <Link href="/contact">
                    <ColumnSubTitle>Contact Us</ColumnSubTitle>
                </Link>
            </div>

            {/* Col 4 - Social Media */}
            <div className="flex w-full flex-col gap-3">
                <ColumnTitle text="Social Media" />

                <SocialLinks link="https://www.linkedin.com/company/algoup">
                    <Linkedin />
                    <ColumnSubTitle>Linkedin</ColumnSubTitle>
                </SocialLinks>

                <SocialLinks link="/">
                    <Youtube />
                    <ColumnSubTitle>Youtube</ColumnSubTitle>
                </SocialLinks>

                <SocialLinks link="/">
                    <X />
                    <ColumnSubTitle>X</ColumnSubTitle>
                </SocialLinks>

                <SocialLinks link="/">
                    <Wechat />
                    <ColumnSubTitle>Wechat</ColumnSubTitle>
                </SocialLinks>

                <SocialLinks link="/">
                    <Facebook />
                    <ColumnSubTitle>Facebook</ColumnSubTitle>
                </SocialLinks>

                <SocialLinks link="/">
                    <Instagram />
                    <ColumnSubTitle>Instagram</ColumnSubTitle>
                </SocialLinks>
            </div>
        </footer>
    )
}
