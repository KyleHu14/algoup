import FlexImage from "@/components/FlexImage"
import Healthcare from "@/components/Icons/Healthcare"
import Logistics from "@/components/Icons/Logistics"
import Production from "@/components/Icons/Production"
import IconWrapper from "@/components/MasterPlan/IconWrapper"
import {
    PageSection,
    PageSectionTitle,
    PageSectionText,
} from "@/components/PageSection"
import SolutionRow from "@/components/MasterPlan/SolutionRow"
import SolutionRowLabel from "@/components/MasterPlan/SolutionRowLabel"

import {
    PageHeader,
    PageHeaderSubTitle,
    PageHeaderTitle,
} from "@/components/PageHeader"

import { MASTERPLAN_CONTENT } from "@/data/masterplan"
import PageContainer from "@/components/PageContainer"

export default function MasterPlan() {
    return (
        <PageContainer>
            <PageHeader>
                <PageHeaderTitle>Master Plan</PageHeaderTitle>
                <PageHeaderSubTitle>
                    Algoup's roadmap and goals into the future.
                </PageHeaderSubTitle>
            </PageHeader>

            {MASTERPLAN_CONTENT.map((section, index) => {
                if (!(section.title === "The Solution")) {
                    return (
                        <PageSection key={index} spacing="lg">
                            <PageSectionTitle>{section.title}</PageSectionTitle>
                            <PageSectionText>
                                {section.description}
                            </PageSectionText>
                            {section.img && (
                                <FlexImage
                                    className="h-48 sm:h-56 lg:h-64 xl:h-72 2xl:h-96"
                                    imgSrc={section.img}
                                    altText={`Image for ${section.title}`}
                                    sizes="(max-width: 768px) 100vw, 80vw"
                                />
                            )}
                        </PageSection>
                    )
                }
            })}

            <PageSection>
                <PageSectionTitle>The Solution</PageSectionTitle>
                <FlexImage
                    className="h-48 sm:h-56 lg:h-64 xl:h-72 2xl:h-96"
                    imgSrc="/master-plan/solution.jpg"
                    altText={`Image for The Solution`}
                    sizes="(max-width: 768px) 100vw, 80vw"
                />
                <PageSectionText>
                    At ALGOUP, we will provide solutions with the potential to
                    revolutionize various sectors that are facing the most
                    severe labor shortages:
                </PageSectionText>

                <div className="flex flex-col gap-2 sm:gap-3 lg:gap-5">
                    <SolutionRow>
                        <IconWrapper>
                            <Logistics />
                        </IconWrapper>

                        <SolutionRowLabel>
                            Logistics and Material Handling
                        </SolutionRowLabel>
                    </SolutionRow>

                    <SolutionRow>
                        <IconWrapper>
                            <Production />
                        </IconWrapper>
                        <SolutionRowLabel>Production</SolutionRowLabel>
                    </SolutionRow>

                    <SolutionRow>
                        <IconWrapper>
                            <Healthcare />
                        </IconWrapper>

                        <SolutionRowLabel>Healthcare</SolutionRowLabel>
                    </SolutionRow>
                </div>

                <PageSectionText>
                    In our early stages, we are honing in on logistics and
                    material handling, leveraging our team's extensive
                    experience and deep insights to deliver optimal solutions
                    that are both effective and cost-efficient for our clients.
                </PageSectionText>

                <PageSectionText className="font-bold">
                    We will not engage any applications or any roles that may
                    cause harm to humanity.
                </PageSectionText>
            </PageSection>
        </PageContainer>
    )
}
