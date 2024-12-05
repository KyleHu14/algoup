import Link from "next/link"

import {
    PageHeader,
    PageHeaderSubTitle,
    PageHeaderTitle,
} from "@/components/PageHeader"

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronsRight } from "lucide-react"
import FlexImage from "@/components/FlexImage"
import { techInfo } from "@/data/ai"

export default function AI() {
    return (
        <>
            <PageHeader>
                <PageHeaderTitle>AI Overview</PageHeaderTitle>
                <PageHeaderSubTitle>
                    Explore Algoup’s extensive capabilities.
                </PageHeaderSubTitle>
            </PageHeader>
            <main className="px-5 py-16 sm:px-28">
                <section className="flex flex-wrap items-center justify-center gap-10">
                    {techInfo.map((technology, index) => (
                        <Card key={index} className="w-[350px]">
                            <CardHeader className="pb-3">
                                <FlexImage
                                    className="relative mb-2 h-12 w-12"
                                    round="roundedFull"
                                    imgSrc="/technology/header.jpg"
                                    altText={`Icon for ${technology.name}`}
                                />
                                <CardTitle className="text-lg lg:text-xl">
                                    {technology.name}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm lg:text-base">
                                {technology.description}
                            </CardContent>
                            <CardFooter>
                                <Link href={technology.link}>
                                    <Button variant="algoup">
                                        Read More <ChevronsRight />
                                    </Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    ))}
                </section>
            </main>
        </>
    )
}
