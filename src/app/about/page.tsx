import LogoDisplayCarousel from "@/components/LogoDisplayCarousel"

import Image from "next/image"

import { PARTNERS } from "../../data/about-us/partners"
import { CUSTOMERS } from "../../data/about-us/customers"

export default function AboutUs() {
    return (
        <main className="flex flex-col gap-24 py-24">
            {/* Main About Us Section */}
            <section className="flex flex-col items-center justify-center gap-10 px-7 md:px-24 lg:flex-row 2xl:gap-16 2xl:px-44">
                {/* About Us Description */}
                <div className="relative h-[12rem] w-full md:h-[23rem] 2xl:h-[25rem]">
                    <Image
                        className="rounded object-cover"
                        src="/about/seattle.jpeg"
                        fill={true}
                        alt="Seattle city"
                    />
                </div>

                <div className="flex w-full flex-col gap-5 text-justify">
                    <div className="text-2xl font-bold xl:text-3xl 2xl:text-4xl">
                        About Algoup
                    </div>
                    <div className="xl:text-md text-gray-500 2xl:text-lg 3xl:text-xl">
                        <span className="font-semibold text-algoup-accent">
                            ALGOUP
                        </span>
                        , headquartered in Seattle, WA, specializes in
                        automation solutions encompassing research and
                        development, manufacturing, and distribution of mobile
                        robots, intelligent equipment, sensors, and related
                        services. The company is dedicated to delivering
                        comprehensive, cost-effective solutions utilizing
                        state-of-the-art technologies positioned at the edge.
                        <br></br>
                        <br></br>
                        <span className="font-semibold text-algoup-accent">
                            ALGOUP
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
            <section className="flex flex-col-reverse items-center justify-center gap-10 bg-zinc-100 px-7 py-12 md:px-24 lg:flex-row lg:py-24 2xl:px-44">
                <div className="flex w-full flex-col gap-5 text-justify">
                    <h1 className="text-2xl font-bold xl:text-3xl 2xl:text-4xl">
                        Our Team
                    </h1>
                    <div className="flex flex-col gap-3 text-gray-600 2xl:text-lg 3xl:text-xl">
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
                <div className="relative h-[12rem] w-full md:h-[20rem] lg:h-[23rem]">
                    <Image
                        className="rounded object-cover"
                        src="/about/team.jpg"
                        fill={true}
                        alt="Seattle city"
                    />
                </div>
            </section>

            {/* Partners */}
            <section className="flex flex-col items-center text-center">
                <h1 className="text-2xl 3xl:mb-10 3xl:text-3xl">
                    Partnered with{" "}
                    <span className="font-bold text-algoup-accent">
                        industry-leading
                    </span>{" "}
                    organizations
                </h1>

                <LogoDisplayCarousel logos={PARTNERS} />
            </section>

            {/* Customers */}
            <section className="flex flex-col items-center text-center">
                <h1 className="text-2xl 3xl:mb-10 3xl:text-3xl">
                    Serving a{" "}
                    <span className="font-bold text-algoup-accent">
                        diverse
                    </span>{" "}
                    array of industries
                </h1>

                <LogoDisplayCarousel logos={CUSTOMERS} />
            </section>
        </main>
    )
}
