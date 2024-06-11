import Image from "next/image"

interface ImageContainerProps {
    src: string
    alt: string
    className?: string
    rounded: boolean
}
// prettier-ignore
export default function ImageContainer({ src, alt, className, rounded}: ImageContainerProps) {
    if (rounded){
        return (
            <div className={`relative ${className}`}>
                <Image
                    className="rounded-md"
                    src={src}
                    fill={true}
                    alt={alt}
                />
            </div>
        )
    }
    return (
        <div className={`relative ${className}`}>
            <Image
                src={src}
                fill={true}
                alt={alt}
            />
        </div>
    )
}
