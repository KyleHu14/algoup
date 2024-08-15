"use client"

import OrangeSemibold from "@/components/General/OrangeSemibold"

import { Rabbit, Undo2, Weight } from "lucide-react"

import {
    columnHeaders,
    data,
} from "../../../../data/product/specifications/tractor"

import { ReactImageTurntable } from "react-image-turntable"
import { useRef } from "react"
import ProductCoverImage from "@/components/Product/CoverImage"
import UnderlineSpan from "@/components/General/UnderlineSpan"
import TitleSection from "@/components/Product/TitleSection"
import SpecificationSummary from "@/components/Product/SpecificationSummary"
import SpecificationTable from "@/components/Product/SpecificationTable"
import SpecHeader from "@/components/Product/SpecificationHeader"
import { SpecDescription } from "@/components/Product/SpecificationDescription"

export default function Content() {
    const specsRef = useRef<null | HTMLDivElement>(null)

    const images = [
        "/agv/tractor/t/1.jpg",
        "/agv/tractor/t/2.jpg",
        "/agv/tractor/t/3.jpg",
        "/agv/tractor/t/4.jpg",
        "/agv/tractor/t/5.jpg",
        "/agv/tractor/t/6.jpg",
        "/agv/tractor/t/7.jpg",
        "/agv/tractor/t/8.jpg",
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
                data={data}
            />
        </main>
    )
}
