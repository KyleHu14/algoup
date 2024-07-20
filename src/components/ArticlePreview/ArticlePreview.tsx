import DateFormatter from "../DateFormatter/DateFormatter"

interface ArticlePreviewParams {
    key: number
    date: string
    title: string
    img: string
}

// prettier-ignore
export default function ArticlePreview({key, date, title, img} : ArticlePreviewParams) {
    return (
        <div key={key}>
            <DateFormatter dateString={date}/>
            <h1>{title}</h1>
            <h1>{img}</h1>
        </div>
    )
}
