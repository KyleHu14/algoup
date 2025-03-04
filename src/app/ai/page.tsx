// Components
import {
    PageHeader,
    PageHeaderSubTitle,
    PageHeaderTitle,
} from "@/components/PageHeader"
import PageContainer from "@/components/PageContainer"

// Next Imports
import { Metadata } from "next"

// Data
import { AI_CONTENT } from "@/data/ai"
import { Brain } from "lucide-react"
import { Card } from "@/components/ui/card"

export const metadata: Metadata = {
    title: "AI",
    description:
        "Explore Algoup's cutting-edge AI technologies and solutions driving innovation across industries.",
    keywords: [
        "edge-embedded AI",
        "advanced artificial intelligence",
        "closed-loop data engine",
        "edge-embedded AI",
        "AI",
        "algoup ai",
    ],
}

export default function AI() {
    return (
        <PageContainer>
            <PageHeader className="text-center">
                <PageHeaderTitle>Artificial Intelligence</PageHeaderTitle>
                <PageHeaderSubTitle>
                    Learn about ALGOUP AI technology.
                </PageHeaderSubTitle>
            </PageHeader>

            <div className="grid gap-8 md:gap-12 xl:grid-cols-2">
                {/* Left Column - Visual Element */}
                <div className="relative flex items-center justify-center">
                    <div className="relative aspect-square w-full max-w-md">
                        <div className="absolute inset-0 animate-pulse rounded-full bg-[#71c6cc]/10" />
                        <div className="animation-delay-500 absolute inset-4 animate-pulse rounded-full bg-[#71c6cc]/20" />
                        <div className="animation-delay-1000 absolute inset-8 animate-pulse rounded-full bg-[#71c6cc]/30" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Brain className="h-24 w-24 text-[#71c6cc]" />
                        </div>
                    </div>
                </div>

                {/* Right Column - Text Content */}
                <div className="space-y-8">
                    {AI_CONTENT.map((section, index) => (
                        <Card
                            key={index}
                            className="bg-background/50 p-6 backdrop-blur-sm"
                        >
                            <h2 className="flex items-center gap-3 text-xl font-semibold">
                                <section.icon className="h-6 w-6 text-algoup-accent" />
                                <span>{section.title}</span>
                            </h2>

                            <p className="mt-2 text-justify text-muted-foreground">
                                {section.content}
                            </p>
                        </Card>
                    ))}
                </div>
            </div>
        </PageContainer>
    )
}
