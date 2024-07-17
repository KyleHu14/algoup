import { Button } from "@/components/ui/button"
import { Hammer, Leaf, SearchCheck } from "lucide-react"
import Image from "next/image"

export default function News() {
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

                {/* Image */}
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
                            Algoup website goes live!
                        </div>
                        <div className="mt-2 w-[28rem] text-lg text-zinc-300">
                            The algoup website has just gone live, learn about
                            how its built and organized.
                        </div>
                        <Button className="mt-5 bg-zinc-100 text-lg text-black hover:bg-zinc-300">
                            Read More
                        </Button>
                    </div>
                </div>
            </div>

            {/* News Body */}
            <div className="flex flex-col gap-10 bg-white px-[20rem] py-[6rem]"></div>
        </main>
    )
}
