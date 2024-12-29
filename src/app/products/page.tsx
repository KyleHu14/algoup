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

// Icon Imports
import { ChevronsRight } from "lucide-react"

// Next Imports
import Image from "next/image"
import Link from "next/link"

// Data Imports
import { agvCategories } from "../../data/product-specs/categories"
import { ProductCategoryType } from "../../data/product-specs/categories"

import PageContainer from "@/components/PageContainer"
import { PageHeader, PageHeaderTitle } from "@/components/PageHeader"
import {
    PageSection,
    PageSectionText,
    PageSectionTitle,
} from "@/components/PageSection"

export default function ProductsHome() {
    return (
        <PageContainer>
            <PageHeader>
                <PageHeaderTitle>Products</PageHeaderTitle>
            </PageHeader>

            <PageSection>
                <PageSectionTitle>Autonomous Guided Vehicles</PageSectionTitle>
                <CategoryDisplay
                    title="Autonomous Guided Vehicles"
                    subTitle="Easy to operate, intuitive controls, and reliable."
                    categoryData={agvCategories}
                />
            </PageSection>

            {/* Humanoid Robot */}
            <PageSection>
                <PageSectionTitle>Humanoid Robot</PageSectionTitle>
                <PageSectionText>
                    Leveraging years of expertise in robotics research,
                    development, and deployment across a wide range of use
                    cases, coupled with cutting-edge embedded AI technologies,
                    we are developing specialized humanoid robots capable of
                    performing complex tasks. These robots are designed to
                    alleviate human workload, allowing individuals to focus on
                    higher-priority activities.
                </PageSectionText>

                <PageSectionText>
                    Stay tuned for further updates!
                </PageSectionText>
            </PageSection>
        </PageContainer>
    )
}

// Components used for this page
interface ProductCardProps {
    name: string
    description: string
    imageSrc: string
    href: string
}

function ProductCard({ name, description, imageSrc, href }: ProductCardProps) {
    return (
        <Card className="flex flex-col items-center justify-center">
            <CardHeader>
                <CardTitle className="text-center text-lg font-semibold">
                    {name}
                </CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="relative flex h-[90px] w-[120px] items-center justify-center">
                    <Image
                        className="object-cover"
                        src={imageSrc}
                        fill={true}
                        alt="Category Image"
                    />
                </div>
            </CardContent>
            <CardFooter className="flex items-center justify-center">
                <Link href={href}>
                    <Button variant="algoup">
                        View More <ChevronsRight />
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    )
}

interface CategoryDisplayProps {
    title: string
    subTitle: string
    categoryData: ProductCategoryType[]
}

// prettier-ignore
function CategoryDisplay({categoryData}: CategoryDisplayProps) {
    return (
        <div className="flex flex-col gap-5">
            {/* AMV Category Card Display */}
            <div className="flex flex-col flex-wrap gap-7 sm:flex-row ">
                {categoryData.map((categoryObj, index) => {
                    return (
                        <div key={index}>
                            <ProductCard
                                name={categoryObj.name}
                                description={categoryObj.description}
                                imageSrc={categoryObj.imageSrc}
                                href={`/products/${categoryObj.href}`}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
