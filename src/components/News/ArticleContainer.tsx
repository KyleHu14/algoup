// Components
import FlexImage from "../FlexImage"

interface Props {
    title: string
    excerpt: string
    author: string
    img: string
}

export default function ArticleContainer({
    title,
    excerpt,
    author,
    img,
}: Props) {
    return (
        /**
         * md:flex-row : Row based layout on desktop
         */
        <div className="group flex flex-col items-center gap-2 md:flex-row">
            {/* Article Image */}
            <FlexImage
                className="relative h-44 w-44"
                imgSrc={img}
                altText="Article's cover image"
            />

            {/* Text */}
            <div>
                <h3 className="text-xl font-bold group-hover:underline">
                    {title}
                </h3>
                <p className="text-lg">{excerpt}</p>
                <p className="text-md">By : {author}</p>
            </div>
        </div>
    )
}
