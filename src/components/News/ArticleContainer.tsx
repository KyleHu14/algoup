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
        <div className="group flex flex-col items-center">
            {/* Featured Article Image */}
            <FlexImage
                className="relative h-44 w-44"
                imgSrc={img}
                altText="Article's cover image"
            />
            <h3 className="group-hover:underline">{title}</h3>
            <p>{excerpt}</p>
            <p>By : {author}</p>
        </div>
    )
}
