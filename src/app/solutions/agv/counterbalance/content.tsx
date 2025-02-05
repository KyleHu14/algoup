"use client"

import UnderlineSpan from "@/components/UnderlineSpan"
import Semibold from "@/components/Semibold"

import { Rabbit, Undo2, Weight } from "lucide-react"
import ProductCoverImage from "@/components/Product/CoverImage"

import {
    columnHeaders,
    data,
} from "../../../../data/product-specs/specifications/counterbalance"

import { ReactImageTurntable } from "react-image-turntable"
import TitleSection from "@/components/Product/TitleSection"
import SpecificationSummary from "@/components/Product/SpecificationSummary"
import SpecHeader from "@/components/Product/SpecificationHeader"
import { SpecDescription } from "@/components/Product/SpecificationDescription"
import SpecificationTable from "@/components/Product/SpecificationTable"

export default function Content() {
    const images360 = [
        "/agv/counterbalance/1.png",
        "/agv/counterbalance/2.png",
        "/agv/counterbalance/3.png",
        "/agv/counterbalance/4.png",
        "/agv/counterbalance/5.png",
        "/agv/counterbalance/6.png",
        "/agv/counterbalance/7.png",
        "/agv/counterbalance/8.png",
    ]

    return (
        <main>
            <TitleSection
                title="Counterbalance AGV"
                subDesc="Perfect for frequent handling of large cargo."
                mainDesc={
                    <>
                        <UnderlineSpan text="High Flexibility" /> Pallet
                        Movement Solution
                    </>
                }
                productImage={
                    <ProductCoverImage
                        className="h-[25rem] w-[40rem]"
                        src="/agv/counterbalance/1.png"
                        alt="T series tractor"
                        rounded={false}
                    />
                }
            ></TitleSection>

            {/* Specification Summary */}
            <SpecificationSummary
                title={<>Specification Overview</>}
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
                        className="h-[20rem] w-[25rem]"
                        images={images360}
                        autoRotate={{ disabled: true }}
                        movementSensitivity={40}
                    />
                }
            />

            {/* Technical Specifications */}
            <SpecificationTable
                title="Counter Balance AGV Technical Specifications"
                columnHeaders={columnHeaders}
                data={data}
            />
        </main>
    )
}
