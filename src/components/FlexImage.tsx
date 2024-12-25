import Image from "next/image"

interface Props {
    className?: string
    imgSrc: string
    altText: string
    round?: keyof typeof roundVariants
    sizes?: string
}

const roundVariants = {
    default: "",
    rounded: "rounded",
    roundedFull: "rounded-full",
}

// prettier-ignore
export default function FlexImage({ className, imgSrc, altText, round = "default", sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}: Props) {
    return (
        <div className={`relative ${className}`}>
            <Image
                className={`object-cover ${roundVariants[round]}`}
                src={imgSrc}
                fill={true}
                alt={altText}
                sizes={sizes}
            />
        </div>
    )
}
