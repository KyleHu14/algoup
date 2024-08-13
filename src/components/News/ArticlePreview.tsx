import Image from "next/image"
import DateFormatter from "./DateFormatter"
import Link from "next/link"

interface ArticlePreviewParams {
    date: string
    title: string
    img: string
    slug: string
}

export default function ArticlePreview({
    date,
    title,
    img,
    slug,
}: ArticlePreviewParams) {
    return (
        <>
            <div className="relative h-[10rem]">
                <Image src={img} alt="Article Cover Image" fill={true} />
            </div>
            <h1 className="font-bold">{title}</h1>
            <DateFormatter dateString={date} />
        </>
    )
}
