import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="flex justify-center bg-[#18181B] py-24 pt-[5rem] lg:gap-[5rem] lg:px-[5rem] xl:gap-[8rem] xl:px-[10rem] 2xl:gap-20 2xl:px-16">
            {/* Col 1 - Logo */}
            <div className="flex flex-col">
                <Image
                    src="/logo-full.jpg"
                    width={317}
                    height={75}
                    alt="Logo Picture"
                />
                <p className="ml-6 text-xl text-[#C3C3C3]">
                    Always striving for innovation.
                </p>
            </div>

            {/* Col 2 - Contact */}
            <div className="flex flex-col gap-3">
                <h1 className="text-4xl font-semibold text-secondary-color">
                    Contact
                </h1>
                <div className="text-white">
                    <h1 className="text-2xl font-semibold 2xl:text-3xl">
                        Phone
                    </h1>
                    <p className="text-lg font-light text-zinc-400 2xl:text-2xl">
                        US: +1 202 664 4153
                    </p>
                    <p className="text-lg font-light text-zinc-400 2xl:text-2xl">
                        CN: + 86 182 0190 0625
                    </p>
                </div>
                <div className="text-white">
                    <h1 className="text-2xl font-semibold 2xl:text-3xl">
                        Email
                    </h1>
                    <p className="text-lg font-light text-zinc-400 2xl:text-2xl">
                        bill@algoupinc.com
                    </p>
                </div>
            </div>

            {/* Col 3 - Navigation */}
            <div className="flex flex-col gap-3">
                <h1 className="text-4xl font-semibold text-secondary-color">
                    Navigation
                </h1>
                <Link className="text-xl text-zinc-400" href="/technology">
                    Technology
                </Link>
                <Link className="text-xl text-zinc-400" href="/products">
                    Products
                </Link>
                <Link className="text-xl text-zinc-400" href="/manufacturing">
                    Manufacturing Capability
                </Link>
                <Link className="text-xl text-zinc-400" href="/service">
                    Service
                </Link>
                <Link className="text-xl text-zinc-400" href="/news">
                    News
                </Link>
                <Link className="text-xl text-zinc-400" href="/contact">
                    Contact Us
                </Link>
            </div>

            {/* Col 4 - Social Media */}
            <div className="flex flex-col gap-3">
                <h1 className="text-4xl font-semibold text-secondary-color">
                    Social Media
                </h1>
                <Link
                    className="flex items-center gap-2 text-xl text-zinc-400"
                    href="https://www.linkedin.com/company/algoup"
                >
                    <Linkedin />
                    <p>Linkedin</p>
                </Link>
                <Link
                    className="flex items-center gap-2 text-xl text-zinc-400"
                    href="/"
                >
                    <Youtube />
                    <p>Youtube</p>
                </Link>
                <Link
                    className="flex items-center gap-2 text-xl text-zinc-400"
                    href="/"
                >
                    <X />
                    <p>X / Twitter</p>
                </Link>
                <Link
                    className="flex items-center gap-2 text-xl text-zinc-400"
                    href="/"
                >
                    <Wechat /> <p>Wechat</p>
                </Link>
                <Link
                    className="flex items-center gap-2 text-xl text-zinc-400"
                    href="/"
                >
                    <Facebook />
                    <p>Facebook</p>
                </Link>
                <Link
                    className="flex items-center gap-2 text-xl text-zinc-400"
                    href="/"
                >
                    <Instagram />
                    <p>Instagram</p>
                </Link>
            </div>
        </footer>
    )
}

function Wechat() {
    return (
        <svg
            fill="currentColor"
            className="h-8 w-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
        >
            {/* // <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
            <path d="M385.2 167.6c6.4 0 12.6 .3 18.8 1.1C387.4 90.3 303.3 32 207.7 32 100.5 32 13 104.8 13 197.4c0 53.4 29.3 97.5 77.9 131.6l-19.3 58.6 68-34.1c24.4 4.8 43.8 9.7 68.2 9.7 6.2 0 12.1-.3 18.3-.8-4-12.9-6.2-26.6-6.2-40.8-.1-84.9 72.9-154 165.3-154zm-104.5-52.9c14.5 0 24.2 9.7 24.2 24.4 0 14.5-9.7 24.2-24.2 24.2-14.8 0-29.3-9.7-29.3-24.2 .1-14.7 14.6-24.4 29.3-24.4zm-136.4 48.6c-14.5 0-29.3-9.7-29.3-24.2 0-14.8 14.8-24.4 29.3-24.4 14.8 0 24.4 9.7 24.4 24.4 0 14.6-9.6 24.2-24.4 24.2zM563 319.4c0-77.9-77.9-141.3-165.4-141.3-92.7 0-165.4 63.4-165.4 141.3S305 460.7 397.6 460.7c19.3 0 38.9-5.1 58.6-9.9l53.4 29.3-14.8-48.6C534 402.1 563 363.2 563 319.4zm-219.1-24.5c-9.7 0-19.3-9.7-19.3-19.6 0-9.7 9.7-19.3 19.3-19.3 14.8 0 24.4 9.7 24.4 19.3 0 10-9.7 19.6-24.4 19.6zm107.1 0c-9.7 0-19.3-9.7-19.3-19.6 0-9.7 9.7-19.3 19.3-19.3 14.5 0 24.4 9.7 24.4 19.3 .1 10-9.9 19.6-24.4 19.6z" />
        </svg>
    )
}

function X() {
    return (
        <svg
            fill="currentColor"
            className="h-7 w-7"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
        >
            {/* // <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}

            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
        </svg>
    )
}
function Youtube() {
    return (
        // <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
        <svg
            fill="currentColor"
            className="h-8 w-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
        >
            <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
        </svg>
    )
}

function Linkedin() {
    return (
        // <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
        <svg
            fill="currentColor"
            className="h-8 w-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
        >
            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
        </svg>
    )
}

function Facebook() {
    // <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
    return (
        <svg
            fill="currentColor"
            className="h-8 w-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
        >
            <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" />
        </svg>
    )
}

function Instagram() {
    // <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
    return (
        <svg
            fill="currentColor"
            className="h-8 w-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
        >
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
        </svg>
    )
}
