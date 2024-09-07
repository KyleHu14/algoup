import { MutableRefObject } from "react"

interface Props {
    title: React.ReactNode
    specifications: React.ReactNode
    productView: React.ReactNode
    specsRef?: MutableRefObject<HTMLDivElement | null>
}

export default function SpecificationSummary({
    title,
    specifications,
    productView,
    specsRef,
}: Props) {
    return (
        <section
            ref={specsRef}
            className="flex h-[100vh] flex-col items-center justify-center gap-16"
        >
            {/* Title */}
            <h1 className="text-4xl text-zinc-800 2xl:text-5xl">{title}</h1>

            {/* Content */}
            <div className="flex items-center gap-16">
                {/* Specs */}
                <div className="flex max-w-[25rem] flex-col gap-5">
                    {specifications}
                </div>

                <div>
                    {productView}
                    <h1 className="text-center font-bold text-orange-400">
                        Click and Drag for 360 View.
                    </h1>
                </div>
            </div>
        </section>
    )
}