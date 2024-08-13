"use client"

import { Button } from "@/components/ui/button"

import UnderlineSpan from "@/components/General/UnderlineSpan"
import OrangeSemibold from "@/components/General/OrangeSemibold"

import { Rabbit, Undo2, Weight } from "lucide-react"
import ProductTable from "@/components/Product/Table"

import {
    columnHeaders,
    tractorData,
} from "../../../../data/product/specifications/tractor"

import { ReactImageTurntable } from "react-image-turntable"
import { useRef } from "react"
import ProductCoverImage from "@/components/Product/CoverImage"

export default function TractorPage() {
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
            <section className="flex flex-col items-center justify-center gap-4 bg-zinc-100 py-14 2xl:h-[90vh] 2xl:py-0">
                {/* Main Title */}
                <h1 className="text-3xl text-zinc-800 2xl:text-4xl">
                    Tractor AGV
                </h1>
                {/* prettier-ignore */}
                <h1 className="text-4xl 2xl:text-5xl text-zinc-800 mb-3">
                    <UnderlineSpan text="Unique" /> Design for <UnderlineSpan text="Tracking" /> Applications.
                </h1>
                <h2 className="text-xl">
                    Perfect for frequent handling of large cargo.
                </h2>

                {/* Learn More Button */}
                <Button
                    onClick={scrollToSpecs}
                    className="w-fit bg-orange-400 text-xl hover:bg-orange-500 2xl:mb-12"
                >
                    Learn More
                </Button>

                {/* PGT Image */}
                <ProductCoverImage
                    src="/agv/tractor/tseries-1.png"
                    alt="T series tractor"
                    rounded={false}
                />
            </section>

            {/* Specification Summary */}
            <section
                ref={specsRef}
                className="flex h-[100vh] flex-col items-center justify-center gap-16"
            >
                {/* Title */}
                <h1 className="text-4xl text-zinc-800 2xl:text-5xl">
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
                    <div>
                        <ReactImageTurntable
                            className="h-[17rem] w-[25rem] 2xl:h-[20rem] 2xl:w-[35rem]"
                            images={images}
                            autoRotate={{ disabled: true }}
                            movementSensitivity={100}
                        />
                        <h1 className="text-center font-bold text-orange-400">
                            Click and Drag for 360 View.
                        </h1>
                    </div>
                </div>
            </section>

            {/* Technical Specifications */}
            <section className="flex flex-col gap-5 px-40 pb-32 2xl:px-96">
                {/* Title */}
                <h1 className="text-center text-3xl text-zinc-800 2xl:text-4xl">
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
    return (
        <p className="text-md font-medium text-zinc-700 2xl:text-lg">
            {children}
        </p>
    )
}

interface SpecHeaderProps {
    title: string
    children: React.ReactNode
}

function SpecHeader({ title, children }: SpecHeaderProps) {
    return (
        <h1 className="flex items-center gap-2 text-xl font-bold 2xl:text-2xl">
            {children}
            {title}
        </h1>
    )
}
