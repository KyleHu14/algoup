import {
    PageSection,
    PageSectionTitle,
    PageSectionText,
} from "@/components/PageSection"

import {
    PageHeader,
    PageHeaderSubTitle,
    PageHeaderTitle,
} from "@/components/PageHeader"

import PageContainer from "@/components/PageContainer"

// Next
import { Metadata } from "next"

// Data
import { MASTERPLAN_CONTENT } from "@/data/masterplan"

export const metadata: Metadata = {
    title: "Master Plan",
    description: "Learn about Algoup's roadmap and goals into the future.",
    keywords: [
        "Masterplan",
        "Plan",
        "AI in logistics",
        "AI in healthcare",
        "labor shortages",
        "algoup plan",
    ],
}

export default function MasterPlan() {
    return (
        <PageContainer>
            <PageHeader>
                <PageHeaderTitle>
                    <span className="bg-gradient-to-r from-algoup-accent to-purple-600 bg-clip-text text-transparent">
                        Algoup Master Plan
                    </span>
                </PageHeaderTitle>
                <PageHeaderSubTitle>
                    Algoup&apos;s roadmap and goals into the future.
                </PageHeaderSubTitle>
            </PageHeader>

            {MASTERPLAN_CONTENT.map((section, index) => (
                <PageSection key={index} spacing="sm">
                    <PageSectionTitle>{section.title}</PageSectionTitle>
                    <PageSectionText>{section.description}</PageSectionText>
                </PageSection>
            ))}
        </PageContainer>
    )
}
