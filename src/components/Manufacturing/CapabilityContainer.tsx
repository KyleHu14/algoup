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
        <div className="flex max-w-[50rem] flex-col items-center justify-between gap-1 rounded-md border p-5 shadow-lg 2xl:gap-3">
            {/* Image */}
            <FlexImage
                className={imgClassName}
                imgSrc={imgSrc}
                altText={imgAltText}
            />

            {/* Title */}
            <h2 className="text-xl font-bold sm:text-2xl">{title}</h2>

            {/* Description */}
            <p className="text-md mt-1 text-center font-light text-typography-secondary sm:text-lg">
                {description}
            </p>
        </div>
    )
}
