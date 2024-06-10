import { Button } from "@/components/ui/button"

import UnderlineSpan from "@/components/Typography/UnderlineSpan"
import SemiboldSpan from "@/components/Typography/SemiboldSpan"
import SpecificationHeader from "@/components/Typography/SpecificationHeader"

import Image from "next/image"

export default function PGSTpage() {
    return (
        <main className="">
            {/* Title Section */}
            <div className="flex h-[90vh] flex-col items-center gap-4 bg-zinc-100 pt-14">
                {/* Main Title */}
                <h1 className="text-4xl text-zinc-800">PG-T</h1>
                {/* prettier-ignore */}
                <h1 className="text-5xl text-zinc-800 mb-3">
                    Our <UnderlineSpan text="lightweight" /> and <UnderlineSpan text="reliable" /> AMR.
                </h1>
                <h2 className="text-xl">
                    Perfect for scenarios for frequent handling of light cargo
                    or loads.
                </h2>

                {/* Learn More Button */}
                <Button className="mb-12 w-fit bg-orange-400 text-xl hover:bg-orange-500">
                    Learn More
                </Button>

                {/* PGT Image */}
                <div className="relative h-[20rem] w-[30rem]">
                    <Image
                        className="rounded-md"
                        src="/amr/pgt/pgt-main.jpg"
                        alt="Pgt Image"
                        fill={true}
                    />
                </div>
            </div>

            {/* Specification Summary */}
            <div className="flex h-screen flex-col items-center gap-16 pt-28">
                {/* Title */}
                <h1 className="text-5xl text-zinc-800">
                    Designed for <UnderlineSpan text="general purpose" /> use.
                </h1>

                {/* Content */}
                <div className="flex items-center gap-16">
                    {/* Specs */}

                    <div className="flex max-w-[25rem] flex-col gap-5">
                        {/* Max Weight */}
                        <div>
                            <h1 className="text-2xl font-bold">Max Weight</h1>
                            <p className="text-lg font-medium text-zinc-700">
                                The PG-T can carry up to a maximum of 1500kg of
                                weight, suitable for general purpose use.
                            </p>
                        </div>

                        {/* Max Lifting Height */}
                        <div>
                            <h1 className="text-2xl font-bold">
                                Max Lifting Height
                            </h1>
                            <p className="text-lg font-medium text-zinc-700">
                                With a max lifting height of 60mm, the PG-T can
                                do accomplish simple lifting with ease.
                            </p>
                        </div>

                        {/* Pallet Size */}
                        <div>
                            <h1 className="text-2xl font-bold">Pallet Size</h1>
                            <p className="text-lg font-medium text-zinc-700">
                                Having a pallet size of 1200mm by 1000mm allows
                                for maximum versatility.
                            </p>
                        </div>
                    </div>

                    {/* Image */}
                    <div>
                        <Image
                            src="/amr.png"
                            width={400}
                            height={400}
                            alt="Amr Image"
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}
