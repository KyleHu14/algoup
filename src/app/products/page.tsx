import { amrCategories, agvCategories } from "../../../data/productCategories"

import CategoryDisplay from "@/components/CategoryDisplay/CategoryDisplay"

export default function ProductsHome() {
    return (
        <main className="flex flex-col gap-16 xl:px-28 xl:py-12">
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
