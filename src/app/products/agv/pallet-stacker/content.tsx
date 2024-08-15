"use client"

// React
import { useRef } from "react"

// Icons
import { Rabbit, Undo2, Weight } from "lucide-react"

// 360 View
import { ReactImageTurntable } from "react-image-turntable"

// Components
import UnderlineSpan from "@/components/General/UnderlineSpan"
import OrangeSemibold from "@/components/General/OrangeSemibold"
import CoverImage from "@/components/Product/CoverImage"
import TitleSection from "@/components/Product/TitleSection"
import SpecificationSummary from "@/components/Product/SpecificationSummary"
import SpecificationTable from "@/components/Product/SpecificationTable"

// Data
import {
    columnHeaders,
    data,
} from "../../../../data/product/specifications/pallet-stacker"
import SpecHeader from "@/components/Product/SpecificationHeader"
import { SpecDescription } from "@/components/Product/SpecificationDescription"

export default function Content() {
    const specsRef = useRef<null | HTMLDivElement>(null)

    const pgcr15Images = [
        "/agv/pallet-stacker/pg-cr-16/1.png",
        "/agv/pallet-stacker/pg-cr-16/2.png",
        "/agv/pallet-stacker/pg-cr-16/3.png",
        "/agv/pallet-stacker/pg-cr-16/4.png",
        "/agv/pallet-stacker/pg-cr-16/5.png",
        "/agv/pallet-stacker/pg-cr-16/6.png",
        "/agv/pallet-stacker/pg-cr-16/7.png",
        "/agv/pallet-stacker/pg-cr-16/8.png",
    ]

    return (
        <main>
            <TitleSection
                title="Pallet Stacker AGV"
                subDesc="Perfect for frequent handling of large cargo."
                specsRef={specsRef}
                mainDesc={
                    <>
                        Pallet Stacker{" "}
                        <UnderlineSpan text="Mobility Solution" />.
                    </>
                }
                productImage={
                    <CoverImage
                        className="h-[22rem] w-[30rem]"
                        src="/agv/pallet-stacker/pg-cr-16/1.png"
                        alt="Pallet Stacker Cover Image"
                        rounded={false}
                    />
                }
            ></TitleSection>

            {/* pg-cr-16 */}
            <SpecificationSummary
                title={<>Specification Overview</>}
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
                        className="h-[20rem] w-[24rem] 2xl:h-[24rem] 2xl:w-[30rem]"
                        images={pgcr15Images}
                        autoRotate={{ disabled: true }}
                        movementSensitivity={40}
                    />
                }
            />

            {/* Technical Specifications */}
            <SpecificationTable
                title="Pallet Stacker AGV Technical Specifications"
                columnHeaders={columnHeaders}
                data={data}
            />
        </main>
    )
}
