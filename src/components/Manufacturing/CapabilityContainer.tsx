import FlexImage from "../FlexImage"

interface Props {
    title: string
    description: string
    imgSrc: string
    imgClassName: string
    imgAltText: string
}

export default function CapabilityContainer({
    title,
    description,
    imgSrc,
    imgClassName,
    imgAltText,
}: Props) {
    return (
        <div className="mt-5 flex flex-col items-center justify-between gap-3 rounded-md border p-5 2xl:gap-5 3xl:gap-10">
            {/* Title */}
            <h2 className="text-2xl font-bold 2xl:text-4xl">{title}</h2>

            {/* Image */}
            <FlexImage
                className={imgClassName}
                imgSrc={imgSrc}
                altText={imgAltText}
            />

            {/* Description */}
            <p className="text-typography-secondary mt-1 text-center text-lg font-light 2xl:text-2xl">
                {description}
            </p>
        </div>
    )
}
