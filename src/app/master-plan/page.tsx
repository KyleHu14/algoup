import Section from "@/components/MasterPlan/Section"
import Text from "@/components/MasterPlan/Text"
import Title from "@/components/MasterPlan/Title"
import {
    PageHeader,
    PageHeaderSubTitle,
    PageHeaderTitle,
} from "@/components/PageHeader"

import { MASTERPLAN_TEXT } from "@/data/masterplan-text"

export default function MasterPlan() {
    return (
        <>
            <PageHeader>
                <PageHeaderTitle>Master Plan</PageHeaderTitle>
                <PageHeaderSubTitle>
                    Algoup's roadmap and goals into the future.
                </PageHeaderSubTitle>
            </PageHeader>
            <main className="px-5 pt-10 sm:px-10 md:px-28 md:py-24 lg:px-44 xl:px-72 2xl:px-96">
                {MASTERPLAN_TEXT.map((section, index) => (
                    <Section key={index}>
                        <Title>{section.title}</Title>
                        <Text>{section.description}</Text>
                    </Section>
                ))}
            </main>
        </>
    )
}
