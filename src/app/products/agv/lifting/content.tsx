"use client"

import UnderlineSpan from "@/components/General/UnderlineSpan"
import OrangeSemibold from "@/components/General/OrangeSemibold"

import { Rabbit, Undo2, Weight } from "lucide-react"

import {
    columnHeaders,
    data,
} from "../../../../data/product/specifications/lifting"

import ProductDisplayCarousel from "@/components/Product/DisplayCarousel"
import { ReactImageTurntable } from "react-image-turntable"
import { useRef } from "react"
import TitleSection from "@/components/Product/TitleSection"
import SpecificationSummary from "@/components/Product/SpecificationSummary"
import SpecHeader from "@/components/Product/SpecificationHeader"
import { SpecDescription } from "@/components/Product/SpecificationDescription"
import SpecificationTable from "@/components/Product/SpecificationTable"

export default function Content() {
    const specsRef = useRef<null | HTMLDivElement>(null)

    const carouselImages: string[] = [
        "/agv/lifting/dcseries-1.png",
        "/agv/lifting/ddseries-1.png",
        "/agv/lifting/qseries-1.png",
        "/agv/lifting/dcseries-2.png",
        "/agv/lifting/ddseries-2.png",
        "/agv/lifting/qseries-2.png",
        "/agv/lifting/dcseries-3.png",
        "/agv/lifting/ddseries-3.png",
        "/agv/lifting/qseries-3.png",
    ]

    const dc360Images: string[] = [
        "/agv/lifting/dc/1.jpg",
        "/agv/lifting/dc/2.jpg",
        "/agv/lifting/dc/3.jpg",
        "/agv/lifting/dc/4.jpg",
        "/agv/lifting/dc/5.jpg",
        "/agv/lifting/dc/6.jpg",
        "/agv/lifting/dc/7.jpg",
        "/agv/lifting/dc/8.jpg",
    ]

    const dd360Images: string[] = [
        "/agv/lifting/dd/1.jpg",
        "/agv/lifting/dd/2.jpg",
        "/agv/lifting/dd/3.jpg",
        "/agv/lifting/dd/4.jpg",
        "/agv/lifting/dd/5.jpg",
        "/agv/lifting/dd/6.jpg",
        "/agv/lifting/dd/7.jpg",
        "/agv/lifting/dd/8.jpg",
    ]

    const q360Images = [
        "/agv/lifting/q/1.jpg",
        "/agv/lifting/q/2.jpg",
        "/agv/lifting/q/3.jpg",
        "/agv/lifting/q/4.jpg",
        "/agv/lifting/q/5.jpg",
        "/agv/lifting/q/6.jpg",
        "/agv/lifting/q/7.jpg",
        "/agv/lifting/q/8.jpg",
    ]

    return (
        <main>
            <TitleSection
                title="Lifting AGV"
                subDesc="Perfect for frequent handling of large cargo."
                specsRef={specsRef}
                mainDesc={
                    <>
                        Special Design for{" "}
                        <UnderlineSpan text="Heavy Lifting" />.
                    </>
                }
                productImage={
                    <ProductDisplayCarousel images={carouselImages} />
                }
            ></TitleSection>

            {/* Specification Summary - DC */}
            <SpecificationSummary
                title={<>DC-Series Overview</>}
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
                        className="h-[20rem] w-[35rem]"
                        images={dc360Images}
                        autoRotate={{ disabled: true }}
                        movementSensitivity={120}
                    />
                }
            />

            {/* Specification Summary - DD */}
            <SpecificationSummary
                title={<>DD-Series Overview</>}
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
                        className="h-[20rem] w-[35rem]"
                        images={dd360Images}
                        autoRotate={{ disabled: true }}
                        movementSensitivity={140}
                    />
                }
            />

            {/* Specification Summary - Q */}
            <SpecificationSummary
                title={<>Q-Series Overview</>}
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
                        className="h-[20rem] w-[35rem]"
                        images={q360Images}
                        autoRotate={{ disabled: true }}
                        movementSensitivity={140}
                    />
                }
            />

            <SpecificationTable
                title="Lifting AGV Technical Specifications"
                columnHeaders={columnHeaders}
                data={data}
            />
        </main>
    )
}
