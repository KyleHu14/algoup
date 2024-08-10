import LogoDisplayCarousel from "@/components/LogoDisplayCarousel/LogoDisplayCarousel"

import Image from "next/image"

import { PARTNERS } from "../../data/about-us/partners"
import { CUSTOMERS } from "../../data/about-us/customers"

export default function AboutUs() {
    return (
        <main className="flex flex-col gap-24 pb-24">
            {/* Main About Us Section */}
            <section className="mt-[-5rem] flex h-screen items-center justify-center gap-16 px-[9rem]">
                {/* About Us Description */}
                <div className="relative 2xl:h-[22rem] 2xl:w-[250rem] 3xl:h-[35rem] 3xl:w-[300rem]">
                    <Image
                        className="rounded"
                        src="/about/seattle.jpeg"
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
            </section>

            {/* Our Team Section */}
            <section className="flex w-screen gap-20 bg-zinc-800 p-20 text-white">
                <div className="flex flex-col gap-5">
                    <h1 className="text-5xl font-bold">Our Team</h1>
                    <div className="flex flex-col gap-3 text-2xl">
                        <p>
                            At ALGOUP, our team is composed of dedicated and
                            skilled professionals driven to provide
                            industry-leading robotics solutions. Our team
                            members include engineers, designers, programmers,
                            project managers, and safety specialists who
                            collaborate closely to achieve our mission. With
                            years of collective experience, we have successfully
                            partnered with clients across diverse sectors such
                            as logistics, manufacturing, healthcare, retail and
                            automotive.
                        </p>
                        <p>
                            We specialize in custom robotics system design and
                            development, meticulous programming and maintenance,
                            and the efficient deployment of large-scale
                            projects. Our commitment to innovation ensures that
                            we deliver solutions tailored to meet the evolving
                            demands of our clients and their industries.
                        </p>
                    </div>
                </div>
                <div className="relative 2xl:h-[22rem] 2xl:w-[250rem] 3xl:h-[35rem] 3xl:w-[300rem]">
                    <Image
                        className="rounded"
                        src="/about/team.jpg"
                        fill={true}
                        alt="Seattle city"
                    />
                </div>
            </section>

            {/* Partners */}
            <section className="flex flex-col items-center">
                <h1 className="text-2xl 3xl:mb-10 3xl:text-3xl">
                    Partnered with{" "}
                    <span className="font-bold text-orange-400">
                        industry-leading
                    </span>{" "}
                    organizations
                </h1>

                <LogoDisplayCarousel logos={PARTNERS} />
            </section>

            {/* Customers */}
            <section className="flex flex-col items-center">
                <h1 className="text-2xl 3xl:mb-10 3xl:text-3xl">
                    Serving a{" "}
                    <span className="font-bold text-orange-400">diverse</span>{" "}
                    array of industries
                </h1>

                <LogoDisplayCarousel logos={CUSTOMERS} />
            </section>
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
