"use client"

import Semibold from "@/components/Semibold"

import { Rabbit, Undo2, Weight } from "lucide-react"

import {
    columnHeaders,
    data,
} from "../../../../data/product-specs/specifications/tractor"

import { ReactImageTurntable } from "react-image-turntable"

import ProductCoverImage from "@/components/Product/CoverImage"
import UnderlineSpan from "@/components/UnderlineSpan"
import TitleSection from "@/components/Product/TitleSection"
import SpecificationSummary from "@/components/Product/SpecificationSummary"
import SpecificationTable from "@/components/Product/SpecificationTable"
import SpecHeader from "@/components/Product/SpecificationHeader"
import { SpecDescription } from "@/components/Product/SpecificationDescription"

export default function Content() {
    const images = [
        "/agv/tractor/t/1.png",
        "/agv/tractor/t/2.JPG",
        "/agv/tractor/t/3.JPG",
        "/agv/tractor/t/4.JPG",
        "/agv/tractor/t/5.JPG",
        "/agv/tractor/t/6.JPG",
        "/agv/tractor/t/7.JPG",
        "/agv/tractor/t/8.JPG",
    ]

    return (
        <main>
            {/* Title Section */}
            <TitleSection
                title="Tractor AGV"
                subDesc="Perfect for frequent handling of large cargo."
                mainDesc={
                    <>
                        <UnderlineSpan text="Unique" /> Design for{" "}
                        <UnderlineSpan text="Tracking" /> Applications.
                    </>
                }
                productImage={
                    <ProductCoverImage
                        className="h-[20rem] w-[35rem] 2xl:h-[20rem] 2xl:w-[40rem]"
                        src="/agv/tractor/t/1.png"
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
                specifications={
                    <>
                        {/* Max Weight */}
                        <div>
                            <SpecHeader title="Max Payload Weight">
                                <Weight />
                            </SpecHeader>

                            <SpecDescription>
                                Our tractor AGV can carry up to a maximum of{" "}
                                <Semibold text="4 tons" /> making it suitable
                                for carrying heavy loads.
                            </SpecDescription>
                        </div>

                        {/* Max Lifting Height */}
                        <div>
                            <SpecHeader title="Max Speed">
                                <Rabbit />
                            </SpecHeader>
                            <SpecDescription>
                                With a max speed of{" "}
                                <Semibold text="1 meter / second" />, the
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
                                <Semibold text="800mm" /> allows the tractor to
                                have maximum versatility.
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
