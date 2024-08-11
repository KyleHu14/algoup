"use client"

import { usePathname } from "next/navigation"

// Importing Components
import FooterIcon from "./FooterIcon"
import FooterLink from "./FooterLink"
import FooterFormInput from "./FooterFormInput"

export default function Footer() {
    const pathname = usePathname()

    if (pathname.includes("contact")) {
        return
    }

    return (
        <footer className="flex bg-zinc-900 pb-12 pt-[5rem] lg:gap-[5rem] lg:px-[5rem] xl:gap-[8rem] xl:px-[10rem] 2xl:gap-[12rem] 2xl:px-[15rem]">
            {/* Contact Numbers */}
            <div>
                {/* Contact Information */}
                <div className="flex flex-col gap-3 xl:min-w-[20rem] 2xl:min-w-[25rem]">
                    <div className="text-white">
                        <h1 className="text-2xl font-semibold 2xl:text-3xl">
                            Phone
                        </h1>
                        <p className="text-lg 2xl:text-2xl">
                            US: +1 202 664 4153
                        </p>
                        <p className="text-lg 2xl:text-2xl">
                            CN: + 86 182 0190 0625
                        </p>
                    </div>
                    <div className="text-white">
                        <h1 className="text-2xl font-semibold 2xl:text-3xl">
                            Email
                        </h1>
                        <p className="text-lg 2xl:text-2xl">
                            bill@algoupinc.com
                        </p>
                    </div>
                </div>

                {/* Web Pages */}
                <div className="mt-16">
                    <FooterLink link="/" text="Home" />
                    <FooterLink link="/products" text="Products" />
                    <FooterLink link="/technology" text="Technology" />
                    <FooterLink
                        link="/manufacturing"
                        text="Manufacturing Capability"
                    />
                    <FooterLink link="/service" text="Service" />
                    <FooterLink link="/news" text="Projects" />
                    <FooterLink link="/about" text="About Us" />
                </div>

                {/* Social Links */}
                <div className="mt-5 flex gap-3">
                    {/* Linkedin */}
                    <FooterIcon>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 448 512"
                        >
                            {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                            <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"></path>
                        </svg>
                    </FooterIcon>

                    {/* Facebook */}
                    <FooterIcon>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 320 512"
                        >
                            {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                            <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"></path>
                        </svg>
                    </FooterIcon>

                    {/* Twitter */}
                    <FooterIcon>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 512 512"
                        >
                            {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                        </svg>
                    </FooterIcon>

                    {/* Youtube */}
                    <FooterIcon>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 576 512"
                        >
                            {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                            <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"></path>
                        </svg>
                    </FooterIcon>

                    {/* Messenger */}
                    <FooterIcon>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 448 512"
                        >
                            {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
                        </svg>
                    </FooterIcon>
                </div>
            </div>

            {/* Form */}
            <form action="#" className="flex w-full flex-col gap-4 text-white">
                <div>
                    <div className="mb-3 font-bold xl:text-3xl 2xl:text-4xl 3xl:text-5xl">
                        Contact Us
                    </div>
                    <div className="xl:text-lg 2xl:text-lg">
                        Send us a message and embark on your automation journey.
                        We will respond in 24 hours and we look forward to
                        hearing from you.
                    </div>
                </div>

                <div className="flex gap-5">
                    <FooterFormInput
                        labelText="Name*"
                        placeholderText="What's your name?"
                    />
                    <FooterFormInput
                        labelText="Country or State"
                        placeholderText="USA / California"
                    />
                    <FooterFormInput
                        labelText="Company"
                        placeholderText="Company name"
                    />
                </div>

                <FooterFormInput
                    labelText="Email*"
                    placeholderText="So we can contact you!"
                />
                <FooterFormInput
                    labelText="Phone Number"
                    placeholderText="+1 123-456-789"
                />

                <div>
                    <label className="mb-2 block text-xl font-semibold">
                        Message
                    </label>
                    <textarea
                        className="w-full resize-y rounded-md border-white bg-zinc-800 p-3 text-lg focus:border"
                        placeholder="Write your message here!"
                    />
                </div>

                <button className="max-w-24 rounded-md bg-[#3f4a5c] py-2 text-lg">
                    Send
                </button>
            </form>
        </footer>
    )
}
