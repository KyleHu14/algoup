import { PageHeader, PageHeaderTitle } from "@/components/PageHeader"
import PageContainer from "@/components/PageContainer"
import FlexImage from "@/components/FlexImage"
import { AI_CONTENT } from "@/data/ai"
import { PageSection, PageSectionText } from "@/components/PageSection"

import { Metadata } from "next"

export const metadata: Metadata = {
    title: "AI",
    description:
        "Explore Algoup's cutting-edge AI technologies and solutions driving innovation across industries.",
    keywords: [
        "edge-embedded AI",
        "advanced artificial intelligence",
        "closed-loop data engine",
        "edge-embedded AI",
    ],
    openGraph: {
        title: "Artificial Intelligence",
    },
}

export default function AI() {
    return (
        <PageContainer>
            <PageHeader>
                <PageHeaderTitle>Artificial Intelligence</PageHeaderTitle>
                <FlexImage
                    className="h-48 sm:h-56 lg:h-64 xl:h-72 2xl:h-96"
                    imgSrc="/ai/ai.jpg"
                    altText="AI Cover Image"
                    sizes="(max-width: 768px) 100vw, 80vw"
                />
            </PageHeader>
            {AI_CONTENT.map((text, index) => (
                <PageSection key={index} spacing="sm">
                    <PageSectionText>{text}</PageSectionText>
                </PageSection>
            ))}
        </PageContainer>
    )
}
