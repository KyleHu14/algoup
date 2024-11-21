// Components
import CapabilityContainer from "@/components/Manufacturing/CapabilityContainer"

export default function Manufacturing() {
    return (
        <>
            {/* Header */}
            <header className="flex flex-col justify-center gap-1 border-b pb-12 pt-24 text-center sm:gap-3">
                <h1 className="text-xl font-bold text-typography-main sm:text-2xl md:text-3xl">
                    Manufacturing Capabilities
                </h1>
                <p className="text-md text-typography-secondary sm:text-xl">
                    Explore Algoup's extensive manufacturing capbilities.
                </p>
            </header>

            <main className="px-5 py-16 sm:px-28">
                {/* Capabilities Container */}
                <div className="flex flex-col items-center gap-3 sm:gap-10">
                    {/* Robust Production */}
                    <CapabilityContainer
                        title="Robust Production"
                        description="Our manufacturing facility with over 100,000 sq. ft
                        enables us to fabricate critical components, sub-systems
                        and assemble AGVs & AMRs inhouse. Annual production
                        capacity is around 3,000 AGVs/AMRs."
                        imgSrc="/manufacturing/facility-inner.jpg"
                        imgClassName="max-w-[30rem] w-full h-[10rem] sm:h-[16rem] hover:scale-105 duration-300"
                        imgAltText="Manufacturing Facility"
                    />

                    {/* Sustainability */}
                    <CapabilityContainer
                        title="Sustainability"
                        description="Our in-house component & sub-system fabrication,
                                efficient supply chain, and lean production
                                process allows us to have a competitive and
                                sustainable cost structure."
                        imgSrc="/manufacturing/facility-outer.png"
                        imgClassName="max-w-[30rem] w-full h-[10rem] sm:h-[16rem] hover:scale-105 duration-300"
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
                        imgSrc="/manufacturing/quality-control.png"
                        imgClassName="max-w-[30rem] w-full h-[10rem] sm:h-[16rem] hover:scale-105 duration-300"
                        imgAltText="Two People checking for quality control"
                    />
                </div>
            </main>
        </>
    )
}
