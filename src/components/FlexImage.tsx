import Image from "next/image"

interface Props {
    className?: string
    imgSrc: string
    altText: string
    round?: keyof typeof roundVariants
}

const roundVariants = {
    default: "",
    rounded: "rounded",
    roundedFull: "rounded-full",
}

// prettier-ignore
export default function FlexImage({ className, imgSrc, altText, round = "default" }: Props) {
    return (
        <div className={`relative ${className}`}>
            <Image
                className={`object-cover ${roundVariants[round]}`}
                src={imgSrc}
                fill={true}
                alt={altText}
            />
        </div>
    )
}
