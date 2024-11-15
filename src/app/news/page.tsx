// [ Imports ]
// Utilities
import { getAllArticles } from "@/lib/newsUtils"

// Components
import ArticleList from "@/components/News/ArticleList"
import ArticleContainer from "@/components/News/ArticleContainer"
import FlexImage from "@/components/FlexImage"

// NextJs
import Link from "next/link"

export default function News() {
    const allArticles = getAllArticles()

    const featuredArticle = allArticles[0]

    const moreArticles = allArticles.slice(1)

    function slugifyArticle(url: string) {
        return `/news/${url}`
    }

    return (
        <main className="mx-5 my-14 flex max-w-[43rem] flex-col gap-10 text-center md:mx-auto md:text-left">
            {/* Title Section */}
            <section>
                <h1 className="text-xl font-semibold lg:text-3xl">
                    Company News
                </h1>
                <p className="text-md lg:text-xl">
                    <TodaysDate />
                </p>
            </section>

            {/* Featured Article */}
            <ArticleList title="Featured Article">
                <div className="group flex flex-col items-center gap-2 md:flex-row md:items-start">
                    {/* Featured Article Image */}
                    <FlexImage
                        className="relative h-60 w-56"
                        imgSrc={featuredArticle.coverImage}
                        altText="Featured Article's Cover Image"
                    />

                    {/* Featured Article Text */}
                    <div>
                        <h3 className="w-full text-xl font-bold">
                            {featuredArticle.title}
                        </h3>

                        <p className="text-lg">{featuredArticle.excerpt}</p>

                        <Link href={slugifyArticle(featuredArticle.slug)}>
                            <button>Read More</button>
                        </Link>
                    </div>
                </div>
            </ArticleList>

            {/* All Articles */}
            <ArticleList title="All Articles">
                {moreArticles.length > 0 ? (
                    moreArticles.map((articleData, index) => (
                        <ArticleContainer
                            key={index}
                            title={articleData.title}
                            excerpt={articleData.excerpt}
                            author={articleData.author.name}
                            img={articleData.coverImage}
                        />
                    ))
                ) : (
                    <p>No Articles.</p>
                )}
            </ArticleList>
        </main>

        // <main>
        //     {/* Header */}
        //     <section className="flex min-h-[25rem] flex-col gap-10 bg-zinc-800 px-28 py-[4rem] xl:px-[12rem]">
        //         {/* Text */}
        //         <div className="flex flex-col gap-2">
        //             <h1 className="w-10 text-5xl font-bold text-white">News</h1>
        //             <p className="text-3xl font-light text-zinc-300">
        //                 Stay up to date with our recent work.
        //             </p>
        //         </div>

        //         {/* Featured Article */}
        //         <div className="flex gap-5">
        //             <div className="relative h-[18rem] w-[30rem] 2xl:h-[22rem] 2xl:w-[33rem] 3xl:h-[20rem] 3xl:w-[35rem]">
        //                 <Image
        //                     className="object-cover"
        //                     src={featuredArticle.coverImage}
        //                     fill={true}
        //                     alt="News Placeholder"
        //                 />
        //             </div>
        //             <div>
        //                 <div className="text-4xl font-bold text-white">
        //                     Featured Article
        //                 </div>
        //                 <div className="mt-3 text-3xl text-white">
        //                     {featuredArticle.title}
        //                 </div>
        //                 <div className="mt-2 w-[28rem] text-lg text-zinc-300">
        //                     {featuredArticle.excerpt}
        //                 </div>
        //                 <Link href={`/news/${featuredArticle.slug}`}>
        //                     <Button className="mt-5 bg-zinc-100 text-lg text-black hover:bg-zinc-300">
        //                         Read More
        //                     </Button>
        //                 </Link>
        //             </div>
        //         </div>
        //     </section>

        //     {/* News Body */}
        //     <section className="bg-white px-44 py-[3rem] xl:px-[15rem] 2xl:px-[20rem]">
        //         <h1 className="text-4xl font-bold">Browse All Articles</h1>
        //         <div className="mt-[1rem] flex gap-10">
        //             {moreArticles.length > 0 ? (
        //                 moreArticles.map((article, index) =>
        //                     // prettier-ignore
        //                     <Link key={index} className="w-[18rem]" href={`/news/${article.slug}`}>
        //                         <ArticlePreview
        //                             title={article.title}
        //                             date={article.date}
        //                             img={article.coverImage}
        //                             slug={article.slug}
        //                         />
        //                     </Link>,
        //                 )
        //             ) : (
        //                 <p className="text-xl">
        //                     No articles available at the moment.
        //                 </p>
        //             )}
        //         </div>
        //     </section>
        // </main>
    )
}

// Returns today's date
const TodaysDate = () => {
    return (
        <>
            {new Date().toLocaleString("default", {
                month: "long",
                year: "numeric",
                day: "numeric",
            }) + ""}
        </>
    )
}
