interface Props {
    title: string
    children: React.ReactNode
}

export default function ArticleList({ children, title }: Props) {
    return (
        /**
         * mx-auto, w-full, max-w : achieves dynamic width adjustment and caps out at 45rem
         */
        <section className="rounded-m border-light flex w-full flex-col gap-3 p-4">
            {/* Title */}
            <h2 className="w-full text-lg font-semibold lg:text-2xl">
                {title}
            </h2>
            {children}
        </section>
    )
}
