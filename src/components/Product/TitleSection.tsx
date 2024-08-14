import { MutableRefObject } from "react"
import { Button } from "../ui/button"

import ProductCoverImage from "@/components/Product/CoverImage"

interface Props {
    title: string
    mainDesc: React.ReactNode
    subDesc: string
    specsRef: MutableRefObject<HTMLDivElement | null>
    productImage: React.ReactNode
}

export default function TitleSection({
    title,
    mainDesc,
    subDesc,
    specsRef,
    productImage,
}: Props) {
    const scrollToSpecs = () => {
        specsRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <div className="flex flex-col items-center justify-center gap-4 bg-zinc-100 py-14 2xl:h-[90vh] 2xl:py-0">
            <h2 className="text-3xl text-zinc-800 2xl:text-4xl">{title}</h2>
            <h1 className="mb-3 text-4xl text-zinc-800 2xl:text-5xl">
                {mainDesc}
            </h1>
            <h3 className="text-xl">{subDesc}</h3>
            {/* Learn More Button */}
            <Button
                onClick={scrollToSpecs}
                className="w-fit bg-orange-400 text-xl hover:bg-orange-500 2xl:mb-12"
            >
                Learn More
            </Button>
            {productImage}
        </div>
    )
}
