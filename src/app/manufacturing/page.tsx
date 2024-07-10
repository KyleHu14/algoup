import { Hammer, Leaf, SearchCheck } from "lucide-react"
import Image from "next/image"

export default function Manufacturing() {
    return (
        <main>
            {/* Header */}
            <div className="flex min-h-[25rem] items-center justify-between bg-zinc-800 px-[12rem]">
                {/* Text */}
                <div className="flex flex-col gap-2">
                    <h1 className="w-10 text-5xl font-bold text-white">
                        Manufacturing Capabilities
                    </h1>
                    <p className="text-3xl font-light text-zinc-300">
                        Explore our extensive manufacturing capabilities.
                    </p>
                </div>

                {/* Image */}
                <div className="relative 2xl:h-[22rem] 2xl:w-[250rem] 3xl:h-[20rem] 3xl:w-[40rem]">
                    <Image
                        src="/manufacturing/facility-inner.jpg"
                        fill={true}
                        alt="Seattle city"
                    />
                </div>
            </div>

            {/* Body */}
            <div className="flex flex-col gap-10 bg-white px-[20rem] py-[6rem]">
                {/* Robust Production */}
                <div className="flex items-center justify-between gap-10">
                    <div className="max-w-[35rem]">
                        <div className="flex items-center gap-2">
                            <h1 className="text-4xl font-bold">
                                Robust Production
                            </h1>
                            <Hammer height={35} width={35} />
                        </div>

                        <p className="text-2xl font-light text-zinc-700">
                            Our manufacturing facility with over 100,000 sq. ft
                            enables us to fabricate critical components,
                            sub-systems and assemble AGVs & AMRs inhouse. Annual
                            production capacity is around 3,000 AGVs/AMRs.
                        </p>
                    </div>

                    {/* Image */}
                    <div className="relative 2xl:h-[22rem] 2xl:w-[250rem] 3xl:h-[20rem] 3xl:w-[40rem]">
                        <Image
                            className="rounded"
                            src="/manufacturing/facility-outer.jpg"
                            fill={true}
                            alt="Seattle city"
                        />
                    </div>
                </div>

                {/* Sustainability */}
                <div className="flex items-center justify-between gap-10">
                    <div className="max-w-[35rem]">
                        <div className="flex items-center gap-2">
                            <h1 className="text-4xl font-bold">
                                Sustainability
                            </h1>
                            <Leaf height={35} width={35} />
                        </div>

                        <p className="text-2xl font-light text-zinc-700">
                            Our in-house component & sub-system fabrication,
                            efficient supply chain, and lean production process
                            allows us to have a competitive and sustainable cost
                            structure.
                        </p>
                    </div>

                    {/* Image */}
                    <div className="relative 2xl:h-[22rem] 2xl:w-[250rem] 3xl:h-[20rem] 3xl:w-[40rem]">
                        <Image
                            className="rounded"
                            src="/manufacturing/facility-outer.jpg"
                            fill={true}
                            alt="Seattle city"
                        />
                    </div>
                </div>

                {/* Robust Production */}
                <div className="flex items-center justify-between gap-10">
                    <div className="max-w-[35rem]">
                        <div className="flex items-center gap-2">
                            <h1 className="text-4xl font-bold">
                                Quality Control
                            </h1>
                            <SearchCheck height={35} width={35} />
                        </div>

                        <p className="text-2xl font-light text-zinc-700">
                            Quality and performance are the keys to our
                            customers. With best-in-class quality control (ISO
                            90001 certified), we can trace the quality records
                            on each component and manufacturing process helping
                            us to substantially improve the final product’s
                            quality.
                        </p>
                    </div>

                    {/* Image */}
                    <div className="relative 2xl:h-[22rem] 2xl:w-[250rem] 3xl:h-[20rem] 3xl:w-[40rem]">
                        <Image
                            className="rounded"
                            src="/manufacturing/facility-outer.jpg"
                            fill={true}
                            alt="Seattle city"
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}
