import { ArticleBody } from "@/components/News/Article/ArticleBody"
import { ArticleHeader } from "@/components/News/Article/ArticleHeader"
import markdownToHtml from "@/lib/mdToHtml"
import { getArticleBySlug } from "@/lib/newsUtils"

export default async function Page({ params }: { params: { slug: string } }) {
    const article = getArticleBySlug(params.slug)

    const articleContent = await markdownToHtml(article.content || "")

    return (
        <main>
            <article className="py-16">
                <ArticleHeader
                    title={article.title}
                    coverImage={article.coverImage}
                    date={article.date}
                    authorName={article.author.name}
                    authorImage={article.author.picture}
                />
                <ArticleBody content={articleContent} />
            </article>
        </main>
    )
}
