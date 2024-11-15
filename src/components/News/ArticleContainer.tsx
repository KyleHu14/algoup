// Components
import FlexImage from "../FlexImage"

// Nextjs
import Link from "next/link"

interface Props {
    title: string
    excerpt: string
    author: string
    img: string
    date: string
    link: string
}

export default function ArticleContainer({
    title,
    excerpt,
    author,
    img,
    date,
    link,
}: Props) {
    return (
        /**
         * md:flex-row : Row based layout on desktop
         */
        <Link
            href={link}
            className="border-light group flex cursor-pointer flex-col items-center gap-2 p-5 md:flex-row md:items-start"
        >
            {/* Article Image */}
            <FlexImage
                className="relative h-44 w-44"
                imgSrc={img}
                altText="Article's cover image"
            />

            {/* Text */}
            <div className="flex flex-col">
                <h3 className="text-xl font-bold group-hover:underline">
                    {title}
                </h3>
                <p>{`${date} | By ${author}`}</p>
                <p className="text-typography-secondary text-md mt-3">
                    {excerpt}
                </p>
            </div>
        </Link>
    )
}
