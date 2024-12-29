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
import { Button } from "@/components/ui/button"
import { LAST_UPDATED, PRIVACY_POLICY_INFO } from "@/data/privacy-policy"

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
