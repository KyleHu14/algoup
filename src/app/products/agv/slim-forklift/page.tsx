"use client"

import { Button } from "@/components/ui/button"

import UnderlineSpan from "@/components/General/UnderlineSpan"
import OrangeSemibold from "@/components/General/OrangeSemibold"

import { Rabbit, Undo2, Weight } from "lucide-react"
import ProductCoverImage from "@/components/Product/CoverImage"
import ProductTable from "@/components/Product/Table"

import {
    columnHeaders,
    tractorData,
} from "../../../../data/product/specifications/slim-forklift"

import { ReactImageTurntable } from "react-image-turntable"
import { useRef } from "react"

export default function SlimForkliftPage() {
    const specsRef = useRef<null | HTMLDivElement>(null)

    const scrollToSpecs = () => {
        specsRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    const images = [
        "/agv/tractor/tseries-360-1.png",
        "/agv/tractor/tseries-360-2.png",
        "/agv/tractor/tseries-360-3.png",
        "/agv/tractor/tseries-360-4.png",
        "/agv/tractor/tseries-360-5.png",
    ]

    return (
        <main>
            {/* Title Section */}
            <section className="flex h-[90vh] flex-col items-center gap-4 bg-zinc-100 pt-14">
                {/* Main Title */}
                <h1 className="text-4xl text-zinc-800">Slim Forklift AGV</h1>
                {/* prettier-ignore */}
                <h1 className="text-5xl text-zinc-800 mb-3">
                    <UnderlineSpan text="Cost Beneficial" /> Mobility Solution.
                </h1>
                <h2 className="text-xl">
                    Perfect for frequent handling of large cargo.
                </h2>

                {/* Learn More Button */}
                <Button
                    onClick={scrollToSpecs}
                    className="mb-12 w-fit bg-orange-400 text-xl hover:bg-orange-500"
                >
                    Learn More
                </Button>

                {/* PGT Image */}
                <ProductCoverImage
                    className="h-[25rem] w-[40rem]"
                    src="/agv/tractor/tseries-1.png"
                    alt="T series tractor"
                    rounded={false}
                />
            </section>

            {/* Specification Summary */}
            <section
                ref={specsRef}
                className="flex h-[80vh] flex-col items-center gap-16 pt-28"
            >
                {/* Title */}
                <h1 className="text-5xl text-zinc-800">
                    Designed for <UnderlineSpan text="heavy duty" />{" "}
                    applications.
                </h1>

                {/* Content */}
                <div className="flex items-center gap-16">
                    {/* Specs */}
                    <div className="flex max-w-[25rem] flex-col gap-5">
                        {/* Max Weight */}
                        <div>
                            <SpecHeader title="Max Payload Weight">
                                <Weight />
                            </SpecHeader>

                            <SpecDescription>
                                Our tractor AGV can carry up to a maximum of{" "}
                                <OrangeSemibold text="4 tons" /> making it
                                suitable for carrying heavy loads.
                            </SpecDescription>
                        </div>

                        {/* Max Lifting Height */}
                        <div>
                            <SpecHeader title="Max Speed">
                                <Rabbit />
                            </SpecHeader>
                            <SpecDescription>
                                With a max speed of{" "}
                                <OrangeSemibold text="1 meter / second" />, the
                                tractor can move heavy cargo at efficient
                                speeds.
                            </SpecDescription>
                        </div>

                        {/* Pallet Size */}
                        <div>
                            <SpecHeader title="Turning Radius">
                                <Undo2 />
                            </SpecHeader>
                            <SpecDescription>
                                Having a turning radius{" "}
                                <OrangeSemibold text="800mm" /> allows the
                                tractor to have maximum versatility.
                            </SpecDescription>
                        </div>
                    </div>

                    {/* PG-T Image */}
                    {/* <ImageContainer
                        className="h-[20rem] w-[35rem]"
                        src="/agv/tractor/tseries-2.png"
                        alt="AGV Tractor image"
                        rounded={false}
                    /> */}
                    <ReactImageTurntable
                        className="h-[20rem] w-[35rem]"
                        images={images}
                        autoRotate={{ disabled: true }}
                        movementSensitivity={100}
                    />
                </div>
            </section>

            {/* <section className="flex h-[75vh] flex-col items-center gap-5">
                <h1 className="text-5xl text-zinc-800">
                    <UnderlineSpan text="Accurate" /> Navigation
                </h1>

                <p className="max-w-[55rem] text-center text-zinc-700 3xl:text-xl">
                    Utilizing <OrangeSemibold text="SLAM navigation" /> , safety{" "}
                    <OrangeSemibold text="LIDAR" /> obstacle avoidance, and{" "}
                    <OrangeSemibold text="tow steer wheel differential driving" />
                    , the PG-T is able to swiftly navigate through a variety of
                    scenarios.
                </p>

                <ImageContainer
                    className="h-[20rem] w-[25rem]"
                    src="/navigation.jpg"
                    alt="AMR Navigation"
                    rounded={true}
                />
            </section> */}

            {/* Technical Specifications */}
            <section className="flex flex-col gap-5 px-96 pb-32">
                {/* Title */}
                <h1 className="text-center text-4xl text-zinc-800">
                    Tractor AGV Technical Specifications
                </h1>
                <ProductTable
                    columnHeaders={columnHeaders}
                    data={tractorData}
                />
            </section>
        </main>
    )
}

interface SpecDescriptionProps {
    children: React.ReactNode
}

function SpecDescription({ children }: SpecDescriptionProps) {
    return <p className="text-lg font-medium text-zinc-700">{children}</p>
}

interface SpecHeaderProps {
    title: string
    children: React.ReactNode
}

function SpecHeader({ title, children }: SpecHeaderProps) {
    return (
        <h1 className="flex items-center gap-2 text-2xl font-bold">
            {children}
            {title}
        </h1>
    )
}
