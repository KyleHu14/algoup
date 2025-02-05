"use client"

// Icons
import { Rabbit, Undo2, Weight } from "lucide-react"

// 360 View
import { ReactImageTurntable } from "react-image-turntable"

// Components
import UnderlineSpan from "@/components/UnderlineSpan"
import Semibold from "@/components/Semibold"
import CoverImage from "@/components/Product/CoverImage"
import TitleSection from "@/components/Product/TitleSection"
import SpecificationSummary from "@/components/Product/SpecificationSummary"
import SpecificationTable from "@/components/Product/SpecificationTable"

// Data
import {
    columnHeaders,
    data,
} from "../../../../data/product-specs/specifications/slim-forklift"
import SpecHeader from "@/components/Product/SpecificationHeader"
import { SpecDescription } from "@/components/Product/SpecificationDescription"

export default function Content() {
    const pgcd15Images = [
        "/agv/fork-lift/pg-cd-15/1.png",
        "/agv/fork-lift/pg-cd-15/2.png",
        "/agv/fork-lift/pg-cd-15/3.png",
        "/agv/fork-lift/pg-cd-15/4.png",
        "/agv/fork-lift/pg-cd-15/5.png",
        "/agv/fork-lift/pg-cd-15/6.png",
        "/agv/fork-lift/pg-cd-15/7.png",
        "/agv/fork-lift/pg-cd-15/8.png",
    ]

    const pgcd20Images = [
        "/agv/fork-lift/pg-cd-20/1.png",
        "/agv/fork-lift/pg-cd-20/2.png",
        "/agv/fork-lift/pg-cd-20/3.png",
        "/agv/fork-lift/pg-cd-20/4.png",
        "/agv/fork-lift/pg-cd-20/5.png",
        "/agv/fork-lift/pg-cd-20/6.png",
        "/agv/fork-lift/pg-cd-20/7.png",
        "/agv/fork-lift/pg-cd-20/8.png",
    ]

    return (
        <main>
            <TitleSection
                title="Slim Forklift AGV"
                subDesc="Perfect for frequent handling of large cargo."
                mainDesc={
                    <>
                        <UnderlineSpan text="Cost Beneficial" /> Mobility
                        Solution.
                    </>
                }
                productImage={
                    <div className="mt-5 flex items-center justify-center">
                        <CoverImage
                            className="h-[20rem] w-[35rem]"
                            src="/agv/fork-lift/pg-cd-15/1.png"
                            alt="PG-CD 15 Cover Image"
                            rounded={false}
                        />
                    </div>
                }
            ></TitleSection>

            {/* PG-CD-15 */}
            <SpecificationSummary
                title={<>PG-CD 15 Overview</>}
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
                        images={pgcd15Images}
                        autoRotate={{ disabled: true }}
                        movementSensitivity={40}
                    />
                }
            />

            {/* PG-CD-20 */}
            <SpecificationSummary
                title={<>PG-CD 20 Overview</>}
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
                        className="h-[17rem] w-[20rem] 2xl:h-[22rem] 2xl:w-[23rem]"
                        images={pgcd20Images}
                        autoRotate={{ disabled: true }}
                        movementSensitivity={40}
                    />
                }
            />

            {/* Technical Specifications */}
            <SpecificationTable
                title="Slim Forklift AGV Technical Specifications"
                columnHeaders={columnHeaders}
                data={data}
            />
        </main>
    )
}
