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
import {
    MANUFACTURING_CONTENT,
    MANUFACTURING_STATS,
} from "@/data/manufacturing"
import CogAnimation from "@/components/Manufacturing/CogAnimation"
import RecycleAnimation from "@/components/Manufacturing/RecycleAnimation"
import ShieldAnimation from "@/components/Manufacturing/ShieldAnimation"
import { Cog, Recycle, Shield } from "lucide-react"
import { Card } from "@/components/ui/card"

export const metadata: Metadata = {
    title: "Manufacturing Capabilities",
    description:
        "Read about Algoup's production capabilities, quality control, and sustainable manufacturing practices.",
    keywords: [
        "manufacturing facility",
        "complex sub-systems",
        "operational efficiency",
        "sub-system fabrication",
        "optimized supply chain",
        "lean manufacturing principles",
        "cost-efficient structure",
        "comprehensive traceability",
        "algoup facility",
    ],
}

export default function Manufacturing() {
    return (
        <PageContainer>
            <PageHeader className="text-center">
                <PageHeaderTitle className="!text-4xl sm:!text-5xl md:!text-6xl lg:!text-7xl">
                    Manufacturing{" "}
                    <span className="bg-gradient-to-r from-algoup-accent to-algoup-accent-dark bg-clip-text text-transparent">
                        Capabilities
                    </span>
                </PageHeaderTitle>
                <PageHeaderSubTitle className="mx-auto max-w-[800px]">
                    Explore Algoup&apos;sextensive manufacturing infrastructure,
                    where cutting-edge technology meets precision engineering to
                    deliver exceptional results.
                </PageHeaderSubTitle>
            </PageHeader>

            <PageSection className="py-11 lg:py-16">
                <div className="grid gap-8 lg:grid-cols-3">
                    {MANUFACTURING_STATS.map((stat, i) => (
                        <Card key={i} className="p-6 text-center">
                            <h3 className="text-3xl font-bold text-algoup-accent">
                                {stat.value}
                            </h3>
                            <p className="mt-2 text-sm text-muted-foreground">
                                {stat.label}
                            </p>
                        </Card>
                    ))}
                </div>
            </PageSection>

            {/* Robust Production */}

            {MANUFACTURING_CONTENT.map((section, index) => (
                <PageSection
                    className="flex gap-24 rounded-sm border border-zinc-300 p-6 lg:!flex-row lg:gap-12"
                    key={index}
                    spacing="lg"
                >
                    <div className="flex w-full flex-col justify-center gap-2">
                        <PageSectionTitle className="flex items-center gap-3">
                            {section.title === "Robust Production" ? (
                                <div className="rounded-full bg-[#71c6cc]/10 p-2">
                                    <Cog className="h-6 w-6 text-[#71c6cc]" />
                                </div>
                            ) : section.title === "Sustainability" ? (
                                <div className="rounded-full bg-[#71c6cc]/10 p-2">
                                    <Recycle className="h-6 w-6 text-[#71c6cc]" />
                                </div>
                            ) : (
                                <div className="rounded-full bg-[#71c6cc]/10 p-2">
                                    <Shield className="h-6 w-6 text-[#71c6cc]" />
                                </div>
                            )}

                            <span>{section.title}</span>
                        </PageSectionTitle>

                        <PageSectionText className="text-zinc-700 md:!text-lg">
                            {section.description}
                        </PageSectionText>
                    </div>

                    {section.title === "Robust Production" ? (
                        <CogAnimation />
                    ) : section.title === "Sustainability" ? (
                        <RecycleAnimation />
                    ) : (
                        <ShieldAnimation />
                    )}
                </PageSection>
            ))}
        </PageContainer>
    )
}
