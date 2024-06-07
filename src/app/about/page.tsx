import { PARTNERS } from "../../../data/partners";

import PartnerCarousel from "@/components/PartnerCarousel/PartnerCarousel";

import Image from "next/image";

export default function AboutUs() {
    return (
        <main className="flex flex-col gap-24 px-[9rem] py-24">
            <div className="flex gap-16">
                {/* About Us Description */}
                <div className="relative h-[35rem] w-[400rem]">
                    <Image src="/seattle.jpeg" fill={true} alt="Seattle city" />
                </div>

                <div className="flex flex-col justify-center gap-5">
                    <div className="text-5xl font-bold">About Algoup</div>
                    <div className="text-left text-xl text-gray-500">
                        ALGOUP Inc. is an automation solution provider based in
                        Seattle, WA, focusing on R&D, manufacturing and
                        distribution of mobile robots, intelligent equipment and
                        associated services, providing end-to-end cost
                        beneficial solutions with close-to-edge technologies.
                        Over the years, the company has developed a series of
                        robot products, incl. AGVs and AMRs, as well as
                        intelligent software systems, e.g., RCS (robot control
                        system), WMS (warehouse management system) etc.
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
                <div className="mb-10 text-center text-3xl font-bold">
                    Partnered with industry-leading organizations
                </div>

                <PartnerCarousel />
            </div>
        </main>
    );
}

function CompanyFact({ number, text }: { number: string; text: string }) {
    return (
        <div className="border-b border-b-gray-800">
            <div className="text-3xl font-bold">{number}</div>
            <div className="my-3 text-xl">{text}</div>
        </div>
    );
}

function PartnerCard({
    imageUrl,
    companyName,
}: {
    imageUrl: string;
    companyName: string;
}) {
    return (
        <div className="flex w-[20rem] flex-col items-center justify-center bg-gray-100 px-10 py-5">
            <div className="p-10">
                <img src={imageUrl} />
            </div>

            <div className="mb-5 w-full border border-gray-300"></div>

            <div className="font-semibold">{companyName}</div>
        </div>
    );
}
