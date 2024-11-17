import { Hammer, Leaf, SearchCheck } from "lucide-react"
import Image from "next/image"

// Components
import CapabilityContainer from "@/components/Manufacturing/CapabilityContainer"

export default function Manufacturing() {
    return (
        <>
            {/* Header */}
            <header className="flex flex-col justify-center gap-1 py-14 pt-24 text-center sm:gap-3">
                <h1 className="text-typography-main text-2xl font-semibold sm:text-3xl">
                    Manufacturing Capabilities
                </h1>
                <p className="text-typography-secondary text-md sm:text-xl">
                    Explore Algoup's extensive manufacturing capbilities.
                </p>
            </header>

            <main className="px-5">
                {/* Capabilities Container */}
                <div>
                    {/* Robust Production */}
                    <CapabilityContainer
                        title="Robust Production"
                        description="Our manufacturing facility with over 100,000 sq. ft
                        enables us to fabricate critical components, sub-systems
                        and assemble AGVs & AMRs inhouse. Annual production
                        capacity is around 3,000 AGVs/AMRs."
                        imgSrc="/manufacturing/facility-outer.jpg"
                        imgClassName="h-[10rem] w-[20rem]"
                        imgAltText="Manufacturing Facility"
                    />

                    {/* Sustainability */}
                    <CapabilityContainer
                        title="Sustainability"
                        description="Our in-house component & sub-system fabrication,
                                efficient supply chain, and lean production
                                process allows us to have a competitive and
                                sustainable cost structure."
                        imgSrc="/manufacturing/manufacturing-2.png"
                        imgClassName="h-[10rem] w-[20rem]"
                        imgAltText="Indoor Manufacturing Facility"
                    />

                    {/* Quality Control */}
                    <CapabilityContainer
                        title="Quality Control"
                        description="Quality and performance are the keys to our
                                customers. With best-in-class quality control
                                (ISO 90001 certified), we can trace the quality
                                records on each component and manufacturing
                                process helping us to substantially improve the
                                final product’s quality."
                        imgSrc="/manufacturing/manufacturing-1.jpg"
                        imgClassName="h-[10rem] w-[20rem]"
                        imgAltText="Two People checking for quality control"
                    />
                </div>
            </main>
        </>
    )
}
