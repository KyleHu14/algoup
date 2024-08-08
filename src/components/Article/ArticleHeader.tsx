import DateFormatter from "../DateFormatter/DateFormatter"
import markdownStyles from "./article-styles.module.css"

type Props = {
    title: string
    date: string
    coverImage: string
    authorName: string
    authorImage: string
}

export function ArticleHeader({
    title,
    date,
    coverImage,
    authorName,
    authorImage,
}: Props) {
    return (
        <div className="flex flex-col gap-5 text-center">
            <h1 className="text-4xl font-bold">{title}</h1>
            <h2 className="text-2xl font-semibold">{authorName}</h2>
            <DateFormatter dateString={date} />
        </div>
    )
}
