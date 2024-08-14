import Image from "next/image"

interface Props {
    src: string
    alt: string
    className?: string
    rounded: boolean
}
// prettier-ignore
export default function CoverImage({ src, alt, className, rounded}: Props) {
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
                className="object-contain"
                src={src}
                fill={true}
                alt={alt}
            />
        </div>
    )
}
