// Shadcn Imports
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

// Components
import PageContainer from "@/components/PageContainer"
import {
    PageHeader,
    PageHeaderSubTitle,
    PageHeaderTitle,
} from "@/components/PageHeader"
import { PageSection, PageSectionTitle } from "@/components/PageSection"

// Icon Imports
import {
    BotIcon as Robot,
    ChevronsRight,
    Zap,
    Truck,
    ArrowRight,
} from "lucide-react"

// Next Imports
import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"

// Data Imports
import { agvModels } from "../../data/models/agv-models"
import AGVProducts from "@/components/Solutions/AGVProducts"

export const metadata: Metadata = {
    title: "Solutions",
    description:
        "View Algoup's comprehensive and diverse solutions for clients.",
    keywords: ["algoup solutions", "products", "algoup AGV", "algoup AMR"],
}

export default function Solutions() {
    return (
        <PageContainer>
            <PageHeader>
                <PageHeaderTitle>
                    <span className="bg-gradient-to-r from-algoup-accent to-algoup-accent-dark bg-clip-text text-transparent">
                        Solutions
                    </span>
                </PageHeaderTitle>
                <PageHeaderSubTitle>
                    Algoup is committed to delivering comprehensive end-to-end
                    solutions to our clients, integrating a diverse range of
                    products and advanced technologies tailored to meet their
                    specific requirements.
                </PageHeaderSubTitle>
            </PageHeader>

            {/* Humanoid Robot */}
            <PageSection className="grid gap-4 lg:grid-cols-2">
                <Card className="p-6">
                    <div className="flex h-48 items-center justify-center rounded-lg bg-gradient-to-br from-[#71c6cc]/20 to-[#71c6cc]/5">
                        <Robot className="h-24 w-24 text-[#71c6cc] duration-300 group-hover:scale-110" />
                    </div>

                    <div className="mt-4">
                        <h2 className="flex items-center gap-2 text-xl font-bold">
                            <div className="rounded-full bg-[#71c6cc]/10 p-1.5">
                                <Robot className="h-4 w-4 text-[#71c6cc]" />
                            </div>
                            <span>Humanoid Robot</span>
                        </h2>

                        <p className="mt-2 text-muted-foreground">
                            Leveraging years of expertise in robotics research,
                            we are developing specialized humanoid robots
                            capable of performing complex tasks, allowing
                            individuals to focus on higher-priority activities.
                        </p>

                        <div className="mt-2">
                            <span className="inline-flex items-center font-medium text-[#71c6cc]">
                                Stay tuned for updates
                                <Zap className="ml-1 h-4 w-4" />
                            </span>
                        </div>
                    </div>
                </Card>

                <Card className="p-6">
                    <div className="flex h-48 items-center justify-center rounded-lg bg-gradient-to-br from-[#71c6cc]/20 to-[#71c6cc]/5">
                        <div className="grid grid-cols-3 gap-4">
                            {[0, 1, 2].map((i) => (
                                <Truck
                                    key={i}
                                    className="h-12 w-12 text-[#71c6cc] opacity-80 duration-300 group-hover:opacity-100"
                                    style={{
                                        transform: `translateY(${i % 2 ? 10 : -10}px)`,
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="relative mt-4">
                        <h2 className="flex items-center gap-2 text-xl font-bold">
                            <div className="rounded-full bg-[#71c6cc]/10 p-1.5">
                                <Truck className="h-4 w-4 text-[#71c6cc]" />
                            </div>
                            <span>AGVs & AMRs</span>
                        </h2>

                        <p className="mt-2 text-muted-foreground">
                            Our automated guided vehicles and autonomous mobile
                            robots provide efficient material handling and
                            logistics solutions for modern warehouses and
                            manufacturing facilities.
                        </p>

                        <Link
                            href="#products"
                            className="group mt-2 flex items-center text-[#71c6cc] hover:text-[#71c6cc]/80"
                        >
                            <span>View all products</span>
                            <ArrowRight className="h-4 w-4 duration-300 group-hover:translate-x-1" />
                        </Link>
                    </div>
                </Card>
            </PageSection>

            <PageSection>
                <PageSectionTitle>AGVs & AMRs</PageSectionTitle>
                <AGVProducts />
            </PageSection>
        </PageContainer>
    )
}
