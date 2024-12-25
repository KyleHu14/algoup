// Components
import FlexImage from "@/components/FlexImage"
import CapabilityContainer from "@/components/Manufacturing/CapabilityContainer"
import ManufacturingSection from "@/components/Manufacturing/Section"
import ManufacturingText from "@/components/Manufacturing/Text"
import ManufacturingTitle from "@/components/Manufacturing/Title"
import {
    PageHeader,
    PageHeaderSubTitle,
    PageHeaderTitle,
} from "@/components/PageHeader"
import { MANUFACTURING_TEXT } from "@/data/manufacturing-text"

export default function Manufacturing() {
    return (
        <main className="px-5 pt-10 sm:px-10 md:px-[15%] lg:px-[20%] xl:px-[25%]">
            <PageHeader>
                <PageHeaderTitle>Manufacturing Capabilities</PageHeaderTitle>
                <PageHeaderSubTitle>
                    Explore Algoup's extensive manufacturing capbilities.
                </PageHeaderSubTitle>
            </PageHeader>

            {/* Robust Production */}
            {MANUFACTURING_TEXT.map((section, index) => (
                <ManufacturingSection key={index}>
                    <FlexImage
                        className="h-[10rem] w-full max-w-[30rem] duration-300 hover:scale-105 sm:h-[16rem]"
                        imgSrc={section.coverImage}
                        altText={section.coverImageAltText}
                    />

                    <ManufacturingTitle>{section.title}</ManufacturingTitle>

                    <ManufacturingText>{section.description}</ManufacturingText>
                </ManufacturingSection>
            ))}
        </main>
    )
}
