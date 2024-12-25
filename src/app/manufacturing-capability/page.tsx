// Components
import FlexImage from "@/components/FlexImage"
import PageContainer from "@/components/PageContainer"
import {
    PageHeader,
    PageHeaderSubTitle,
    PageHeaderTitle,
} from "@/components/PageHeader"
import {
    PageSection,
    PageSectionText,
    PageSectionTitle,
} from "@/components/PageSection"
import { MANUFACTURING_TEXT } from "@/data/manufacturing-text"

export default function Manufacturing() {
    return (
        <PageContainer>
            <PageHeader className="sm:!flex-row">
                <div className="flex flex-col gap-3">
                    <PageHeaderTitle>
                        Manufacturing Capabilities
                    </PageHeaderTitle>
                    <PageHeaderSubTitle>
                        Explore Algoup's extensive manufacturing capbilities.
                    </PageHeaderSubTitle>
                </div>
                <FlexImage
                    className="h-52 w-full xl:h-56 2xl:w-[70%]"
                    imgSrc="/manufacturing/facility-outer.png"
                    altText="Photo of facility"
                />
            </PageHeader>

            {/* Robust Production */}
            {MANUFACTURING_TEXT.map((section, index) => (
                <PageSection key={index} spacing="lg">
                    <PageSectionTitle>{section.title}</PageSectionTitle>

                    <PageSectionText>{section.description}</PageSectionText>

                    <FlexImage
                        className="h-48 sm:h-56 lg:h-64 xl:h-72 2xl:h-[30rem]"
                        imgSrc={section.coverImage}
                        altText={section.coverImageAltText}
                        sizes="(max-width: 768px) 100vw, 80vw"
                    />
                </PageSection>
            ))}
        </PageContainer>
    )
}
