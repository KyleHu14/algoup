import { join } from "path"
import fs from "fs"
import matter from "gray-matter"

const articleDirectory = join(process.cwd(), "articles")

type Author = {
    name: string
    picture: string
}

type Article = {
    slug: string
    title: string
    date: string
    coverImage: string
    author: Author
    excerpt: string
    ogImage: {
        url: string
    }
    content: string
    preview?: boolean
}

export function getArticleSlug() {
    return fs.readdirSync(articleDirectory)
}

export function getArticleBySlug(slug: string) {
    const realSlug = slug.replace(/\.md$/, "")
    const fullPath = join(articleDirectory, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    return { ...data, slug: realSlug, content } as Article
}

export function getAllArticles(): Article[] {
    const slugs = getArticleSlug()
    const posts = slugs
        .map((slug) => getArticleBySlug(slug))
        // sort posts by date in descending order
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
    return posts
}
