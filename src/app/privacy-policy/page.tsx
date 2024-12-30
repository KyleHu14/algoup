// Components
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

// Next
import { Metadata } from "next"

// Data
import { LAST_UPDATED, PRIVACY_POLICY_INFO } from "@/data/privacy-policy"

export const metadata: Metadata = {
    title: "Privacy Policy",
    description:
        "Review Algoup's privacy policy for details on how Algoup collects, uses, and protects your personal information",
}

export default function PrivacyPolicy() {
    return (
        <PageContainer>
            <PageHeader>
                <PageHeaderTitle>Privacy Policy</PageHeaderTitle>
                <PageHeaderSubTitle>
                    Last Updated: {LAST_UPDATED}
                </PageHeaderSubTitle>
            </PageHeader>

            {PRIVACY_POLICY_INFO.map((section, sectionIndex) => (
                <PageSection key={sectionIndex}>
                    <PageSectionTitle>{section.title}</PageSectionTitle>
                    {section.content.map((content, contentIndex) => {
                        // prettier-ignore
                        if (content.type === "text") {
                            return (
                                <PageSectionText key={contentIndex}>
                                    {content.value}
                                </PageSectionText>
                            )
                        }
                        // prettier-ignore 
                        else {
                            return (
                                <ul key={contentIndex} className="list-disc list-inside ">
                                    {content.value.map((listValue, index) => (
                                        <li className="text-sm sm:text-base md:text-lg" key={index}>{listValue}</li>
                                    ))}
                                </ul>
                            )
                        }
                    })}
                </PageSection>
            ))}
        </PageContainer>
    )
}
