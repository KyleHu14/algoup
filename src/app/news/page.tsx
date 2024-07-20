import { Button } from "@/components/ui/button"
import ArticlePreview from "@/components/ArticlePreview/ArticlePreview"
import { getAllArticles } from "@/lib/newsUtils"
import Image from "next/image"

export default function News() {
    const allArticles = getAllArticles()

    const featuredArticle = allArticles[0]

    const moreArticles = allArticles.slice(1)

    return (
        <main>
            {/* Header */}
            <div className="flex min-h-[25rem] flex-col gap-10 bg-zinc-800 px-[12rem] py-[4rem]">
                {/* Text */}
                <div className="flex flex-col gap-2">
                    <h1 className="w-10 text-5xl font-bold text-white">News</h1>
                    <p className="text-3xl font-light text-zinc-300">
                        Stay up to date with our recent work.
                    </p>
                </div>

                {/* Featured Article */}
                <div className="flex gap-5">
                    <div className="relative 2xl:h-[22rem] 2xl:w-[250rem] 3xl:h-[20rem] 3xl:w-[35rem]">
                        <Image
                            src="/news/news-placeholder.png"
                            fill={true}
                            alt="News Placeholder"
                        />
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-white">
                            Featured Article
                        </div>
                        <div className="mt-3 text-3xl text-white">
                            {featuredArticle.title}
                        </div>
                        <div className="mt-2 w-[28rem] text-lg text-zinc-300">
                            {featuredArticle.excerpt}
                        </div>
                        <Button className="mt-5 bg-zinc-100 text-lg text-black hover:bg-zinc-300">
                            Read More
                        </Button>
                    </div>
                </div>
            </div>

            {/* News Body */}

            <div className="bg-white px-[20rem] py-[3rem]">
                <h1 className="text-4xl font-bold">Browse All Articles</h1>
                <div className="mt-[1rem] flex gap-10">
                    {moreArticles.map((article, index) => {
                        return (
                            <ArticlePreview
                                key={index}
                                title={article.title}
                                date={article.date}
                                img={article.coverImage}
                            />
                        )
                    })}
                </div>
            </div>
        </main>
    )
}
