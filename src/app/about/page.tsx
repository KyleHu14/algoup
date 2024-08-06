import LogoDisplayCarousel from "@/components/LogoDisplayCarousel/LogoDisplayCarousel"

import Image from "next/image"

import { PARTNERS } from "../../data/about-us/partners"
import { CUSTOMERS } from "../../data/about-us/customers"

export default function AboutUs() {
    return (
        <main className="flex flex-col gap-24 px-[9rem] pb-24">
            <div className="mt-[-5rem] flex h-screen items-center justify-center gap-16">
                {/* About Us Description */}
                <div className="relative 2xl:h-[22rem] 2xl:w-[250rem] 3xl:h-[35rem] 3xl:w-[300rem]">
                    <Image
                        className="rounded"
                        src="/seattle.jpeg"
                        fill={true}
                        alt="Seattle city"
                    />
                </div>

                <div className="flex flex-col justify-center gap-5">
                    <div className="font-bold 2xl:text-4xl 3xl:text-5xl">
                        About Algoup
                    </div>
                    <div className="text-left text-gray-500 2xl:text-lg 3xl:text-xl">
                        <span className="font-semibold text-orange-400">
                            ALGOUP Inc.
                        </span>{" "}
                        , headquartered in Seattle, WA, specializes in
                        automation solutions encompassing research and
                        development, manufacturing, and distribution of mobile
                        robots, intelligent equipment, sensors, and related
                        services. The company is dedicated to delivering
                        comprehensive, cost-effective solutions utilizing
                        state-of-the-art technologies positioned at the edge.
                        <br></br>
                        <br></br>
                        <span className="font-semibold text-orange-400">
                            ALGOUP Inc.
                        </span>{" "}
                        has cultivated a portfolio of advanced robot products,
                        including humanoid, hexapod robots, AGVs, AMRs, and
                        cutting-edge sensors. These offerings cater to a diverse
                        clientele across both enterprise (B2B) and consumer
                        (B2C) sectors, underscoring the company’s commitment to
                        innovation and excellence in the automation and retail
                        industry.
                    </div>
                </div>
            </div>

            {/* Company Statistics with Stats */}
            {/* <div className="flex gap-12">
                <div className="flex w-[25rem] flex-col justify-end gap-5">
                    <CompanyFact number="500" text="Team Members" />
                    <CompanyFact number="70%" text="R&D Personnel" />
                    <CompanyFact number="450+" text="Deployed Projects" />
                    <CompanyFact number="30" text="Serving Countries" />
                </div>
            </div> */}

            {/* Partners */}
            <div className="flex flex-col items-center">
                <h1 className="text-2xl 3xl:mb-10 3xl:text-3xl">
                    Partnered with{" "}
                    <span className="font-bold text-orange-400">
                        industry-leading
                    </span>{" "}
                    organizations
                </h1>

                <LogoDisplayCarousel logos={PARTNERS} />
            </div>

            {/* Customers */}
            <div className="flex flex-col items-center">
                <h1 className="text-2xl 3xl:mb-10 3xl:text-3xl">
                    Serving a{" "}
                    <span className="font-bold text-orange-400">diverse</span>{" "}
                    array of industries
                </h1>

                <LogoDisplayCarousel logos={CUSTOMERS} />
            </div>
        </main>
    )
}

function CompanyFact({ number, text }: { number: string; text: string }) {
    return (
        <div className="border-b border-b-gray-800">
            <div className="text-3xl font-bold">{number}</div>
            <div className="my-3 text-xl">{text}</div>
        </div>
    )
}

function PartnerCard({
    imageUrl,
    companyName,
}: {
    imageUrl: string
    companyName: string
}) {
    return (
        <div className="flex w-[20rem] flex-col items-center justify-center bg-gray-100 px-10 py-5">
            <div className="p-10">
                <img src={imageUrl} />
            </div>

            <div className="mb-5 w-full border border-gray-300"></div>

            <div className="font-semibold">{companyName}</div>
        </div>
    )
}
