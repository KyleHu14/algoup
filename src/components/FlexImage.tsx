import Image from "next/image"

interface Props {
    className?: string
    imgSrc: string
    altText: string
    rounded?: boolean
}

// prettier-ignore
export default function FlexImage({ className, imgSrc, altText, rounded = false }: Props) {
    return (
        <div className={`relative ${className}`}>
            {rounded ? (
                <Image
                    className="rounded object-cover"
                    src={imgSrc}
                    fill={true}
                    alt={altText}
                />
            ) : (
                <Image
                    className="object-cover"
                    src={imgSrc}
                    fill={true}
                    alt={altText}
                />
            )}
        </div>
    )
}
