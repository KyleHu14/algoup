import { Hammer, Leaf, SearchCheck } from "lucide-react"
import Image from "next/image"

export default function Manufacturing() {
    return (
        <main>
            {/* Header */}
            <div className="flex min-h-[25rem] items-center justify-center gap-10 bg-zinc-800 2xl:px-[12rem]">
                {/* Text */}
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-bold text-white 2xl:text-5xl">
                        Manufacturing Capabilities
                    </h1>
                    <p className="w-[25rem] text-2xl font-light text-zinc-300 2xl:w-[30rem] 2xl:text-3xl">
                        Explore our extensive manufacturing capabilities.
                    </p>
                </div>

                {/* Image */}
                <div className="relative h-[20rem] w-[36rem] 2xl:h-[22rem] 2xl:w-[38rem] 3xl:h-[20rem] 3xl:w-[40rem]">
                    <Image
                        className="object-cover"
                        src="/manufacturing/facility-inner.jpg"
                        fill={true}
                        alt="Seattle city"
                    />
                </div>
            </div>

            {/* Body */}
            <div className="flex flex-col gap-10 bg-white px-44 py-[6rem] 2xl:px-[14rem] 3xl:px-[20rem]">
                {/* Robust Production */}
                <div className="flex items-center justify-between gap-3 2xl:gap-5 3xl:gap-10">
                    <div className="2xl:max-w-[35rem]">
                        <div className="flex items-center gap-2">
                            <h1 className="text-3xl font-bold 2xl:text-4xl">
                                Robust Production
                            </h1>
                            <Hammer height={35} width={35} />
                        </div>

                        <p className="mt-1 text-xl font-light text-zinc-700 2xl:text-2xl">
                            Our manufacturing facility with over 100,000 sq. ft
                            enables us to fabricate critical components,
                            sub-systems and assemble AGVs & AMRs inhouse. Annual
                            production capacity is around 3,000 AGVs/AMRs.
                        </p>
                    </div>

                    {/* Image */}
                    <div className="relative h-[15rem] w-[100rem] 2xl:h-[18rem] 3xl:h-[20rem] 3xl:w-[40rem]">
                        <Image
                            src="/manufacturing/facility-outer.jpg"
                            fill={true}
                            alt="Facility Outside"
                        />
                    </div>
                </div>

                {/* Sustainability */}
                <div className="flex items-center justify-between gap-3 2xl:gap-5 3xl:gap-10">
                    <div className="max-w-[35rem]">
                        <div className="flex items-center gap-2">
                            <h1 className="text-3xl font-bold 2xl:text-4xl">
                                Sustainability
                            </h1>
                            <Leaf height={35} width={35} />
                        </div>

                        <p className="mt-1 text-xl font-light text-zinc-700 2xl:text-2xl">
                            Our in-house component & sub-system fabrication,
                            efficient supply chain, and lean production process
                            allows us to have a competitive and sustainable cost
                            structure.
                        </p>
                    </div>

                    {/* Image */}
                    <div className="relative h-[15rem] w-[80rem] 2xl:h-[18rem] 3xl:h-[20rem] 3xl:w-[40rem]">
                        <Image
                            src="/manufacturing/manufacturing-2.png"
                            fill={true}
                            alt="Manufacturing Image 2"
                        />
                    </div>
                </div>

                {/* Robust Production */}
                <div className="flex items-center justify-between gap-3 2xl:gap-5 3xl:gap-10">
                    <div className="max-w-[35rem]">
                        <div className="flex items-center gap-2">
                            <h1 className="text-3xl font-bold 2xl:text-4xl">
                                Quality Control
                            </h1>
                            <SearchCheck height={35} width={35} />
                        </div>

                        <p className="mt-1 text-xl font-light text-zinc-700 2xl:text-2xl">
                            Quality and performance are the keys to our
                            customers. With best-in-class quality control (ISO
                            90001 certified), we can trace the quality records
                            on each component and manufacturing process helping
                            us to substantially improve the final product’s
                            quality.
                        </p>
                    </div>

                    {/* Image */}
                    <div className="relative h-[15rem] w-[125rem] 2xl:h-[18rem] 3xl:h-[20rem] 3xl:w-[40rem]">
                        <Image
                            className="object-contain"
                            src="/manufacturing/manufacturing-1.jpg"
                            fill={true}
                            alt="Seattle city"
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}
