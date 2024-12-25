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
import { Button } from "@/components/ui/button"

import { MASTERPLAN_INFO } from "@/data/masterplan-info"

export default function MasterPlan() {
    return (
        <main className="px-5 pt-10 sm:px-10 md:px-[15%] lg:px-[20%] xl:px-[25%]">
            <PageHeader>
                <PageHeaderTitle>Master Plan</PageHeaderTitle>
                <PageHeaderSubTitle>
                    Algoup's roadmap and goals into the future.
                </PageHeaderSubTitle>
                <Button className="PageSectionText-sm sm:PageSectionText-base lg:PageSectionText-lg w-fit bg-algoup-accent-dark">
                    Read More
                </Button>
            </PageHeader>

            {MASTERPLAN_INFO.map((section, index) => {
                if (!(section.title === "The Solution")) {
                    return (
                        <PageSection key={index}>
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
        </main>
    )
}
