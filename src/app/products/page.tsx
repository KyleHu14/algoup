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
import { amrCategories, agvCategories } from "../../data/product/categories"
import { ProductCategoryType } from "../../data/product/categories"

export default function ProductsHome() {
    return (
        <main className="mt-16 flex flex-col gap-16 sm:px-20 sm:pb-12 xl:px-28">
            {/* AMV Section */}
            <CategoryDisplay
                title="Autonomous Mobile Robots"
                subTitle="Powerful, self sustaining, high quality robots."
                categoryData={amrCategories}
            />

            {/* AGV Section */}
            <CategoryDisplay
                title="Autonomous Guided Vehicles"
                subTitle="Easy to operate, intuitive controls, and reliable."
                categoryData={agvCategories}
            />
        </main>
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
        <Card className="flex flex-col items-center justify-center sm:mx-0">
            <CardHeader>
                <CardTitle className="text-center text-lg font-semibold">
                    {name}
                </CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="relative flex h-[100px] w-[130px] items-center justify-center 2xl:h-[120px] 2xl:w-[150px]">
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
                    <Button variant="outline">
                        View More <ChevronsRight />
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    )
}

interface ProductHeaderProps {
    title: string
    subTitle: string
}

function ProductHeader({ title, subTitle }: ProductHeaderProps) {
    return (
        <div className="text-center sm:text-left">
            <h1 className="text-lg font-semibold xl:text-xl 2xl:text-2xl">
                {title}
            </h1>
            <h2 className="text-md font-light text-gray-500 xl:text-lg 2xl:text-xl">
                {subTitle}
            </h2>
        </div>
    )
}

interface CategoryDisplayProps {
    title: string
    subTitle: string
    categoryData: ProductCategoryType[]
}

// prettier-ignore
function CategoryDisplay({title, subTitle, categoryData,}: CategoryDisplayProps) {
    return (
        <div className="flex flex-col gap-5">
            <ProductHeader title={title} subTitle={subTitle} />
            {/* AMV Category Card Display */}
            <div className="mx-[20%] flex flex-col flex-wrap gap-7 sm:mx-0 sm:flex-row xl:gap-20">
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
