"use client"

import { Button } from "@/components/ui/button"

import UnderlineSpan from "@/components/Typography/UnderlineSpan"
import OrangeSemibold from "@/components/Typography/OrangeSemibold"

import { Rabbit, Undo2, Weight } from "lucide-react"
import ImageContainer from "@/components/ImageContainer/ImageContainer"
import ProductTable from "@/components/ProductTable/ProductTable"

import {
    columnHeaders,
    tractorData,
} from "../../../../data/product/specifications/lifting-series"

import ProductDisplayCarousel from "@/components/ProductDisplayCarousel/ProductDisplayCarousel"
import { ReactImageTurntable } from "react-image-turntable"

export default function PGSTpage() {
    const carouselImages: string[] = [
        "/agv/lifting/dcseries-1.png",
        "/agv/lifting/ddseries-1.png",
        "/agv/lifting/dcseries-2.png",
        "/agv/lifting/ddseries-2.png",
        "/agv/lifting/dcseries-3.png",
        "/agv/lifting/ddseries-3.png",
    ]

    const dc360Images: string[] = [
        "/agv/lifting/dc-360-1.png",
        "/agv/lifting/dc-360-2.png",
        "/agv/lifting/dc-360-3.png",
        "/agv/lifting/dc-360-4.png",
        "/agv/lifting/dc-360-5.png",
    ]

    const dd360Images: string[] = [
        "/agv/lifting/dd-360-1.png",
        "/agv/lifting/dd-360-2.png",
        "/agv/lifting/dd-360-3.png",
        "/agv/lifting/dd-360-4.png",
        "/agv/lifting/dd-360-5.png",
    ]

    return (
        <main>
            {/* Title Section */}
            <section className="flex h-[90vh] flex-col items-center gap-4 bg-zinc-100 pt-14">
                {/* Main Title */}
                <h1 className="text-4xl text-zinc-800">Lifting AGV</h1>
                {/* prettier-ignore */}
                <h1 className="text-5xl text-zinc-800 mb-3">
                    A <UnderlineSpan text="robust" /> and <UnderlineSpan text="reliable" /> AGV.
                </h1>
                <h2 className="text-xl">
                    Perfect for frequent handling of large cargo.
                </h2>

                {/* Learn More Button */}
                <Button className="mb-12 w-fit bg-orange-400 text-xl hover:bg-orange-500">
                    Learn More
                </Button>

                <ProductDisplayCarousel images={carouselImages} />
            </section>

            {/* Specification Summary - DC */}
            <section className="flex h-[80vh] flex-col items-center gap-16 pt-28">
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

                    <ReactImageTurntable
                        className="h-[20rem] w-[35rem]"
                        images={dc360Images}
                        autoRotate={{ disabled: true }}
                        movementSensitivity={100}
                    />
                </div>
            </section>

            {/* Specification Summary - DD */}
            <section className="flex h-[80vh] flex-col items-center gap-16 pt-28">
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
                    <ReactImageTurntable
                        className="h-[15rem] w-[50rem]"
                        images={dd360Images}
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
                    Lifting AGV Technical Specifications
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
