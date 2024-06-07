import ProductCard from "./ProductCard"

import { ProductCategoryType } from "../../../data/productCategories"

interface ProductHeaderProps {
    title: string
    subTitle: string
}

function ProductHeader({ title, subTitle }: ProductHeaderProps) {
    return (
        <div>
            <h1 className="font-semibold xl:text-2xl">{title}</h1>
            <h2 className="text-[1rem] font-normal text-gray-500">
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

export default function CategoryDisplay({
    title,
    subTitle,
    categoryData,
}: CategoryDisplayProps) {
    return (
        <div className="flex flex-col gap-5">
            <ProductHeader title={title} subTitle={subTitle} />
            {/* AMV Category Card Display */}
            <div className="flex flex-wrap xl:gap-20">
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
