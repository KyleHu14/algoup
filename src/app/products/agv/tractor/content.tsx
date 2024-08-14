"use client"

import { Button } from "@/components/ui/button"

import OrangeSemibold from "@/components/General/OrangeSemibold"

import { Rabbit, Undo2, Weight } from "lucide-react"

import {
    columnHeaders,
    tractorData,
} from "../../../../data/product/specifications/tractor"

import { ReactImageTurntable } from "react-image-turntable"
import { useRef } from "react"
import ProductCoverImage from "@/components/Product/CoverImage"
import UnderlineSpan from "@/components/General/UnderlineSpan"
import TitleSection from "@/components/Product/TitleSection"
import SpecificationSummary from "@/components/Product/SpecificationSummary"
import SpecificationTable from "@/components/Product/SpecificationTable"

export default function Content() {
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
            <TitleSection
                title="Tractor AGV"
                subDesc="Perfect for frequent handling of large cargo."
                specsRef={specsRef}
                mainDesc={
                    <>
                        <UnderlineSpan text="Unique" /> Design for{" "}
                        <UnderlineSpan text="Tracking" /> Applications.
                    </>
                }
                productImage={
                    <ProductCoverImage
                        className="h-[20rem] w-[35rem] 2xl:h-[20rem] 2xl:w-[40rem]"
                        src="/agv/tractor/tseries-1.png"
                        alt="T series tractor"
                        rounded={false}
                    />
                }
            />

            {/* Specification Summary */}
            <SpecificationSummary
                title={
                    <>
                        Designed for <UnderlineSpan text="heavy duty" />{" "}
                        applications.
                    </>
                }
                specsRef={specsRef}
                specifications={
                    <>
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
                    </>
                }
                productView={
                    <ReactImageTurntable
                        className="h-[17rem] w-[25rem] 2xl:h-[20rem] 2xl:w-[35rem]"
                        images={images}
                        autoRotate={{ disabled: true }}
                        movementSensitivity={100}
                    />
                }
            />

            {/* Technical Specifications */}
            <SpecificationTable
                title="Tractor AGV Technical Specifications"
                columnHeaders={columnHeaders}
                data={tractorData}
            />
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
