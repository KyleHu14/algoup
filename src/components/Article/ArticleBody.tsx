import markdownStyles from "./article-styles.module.css"

type Props = {
    content: string
}

export function ArticleBody({ content }: Props) {
    return (
        <div className="mx-auto max-w-2xl">
            <div
                className={markdownStyles["markdown"]}
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </div>
    )
}
