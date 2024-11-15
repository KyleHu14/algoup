interface Props {
    title: string
    children: React.ReactNode
}

export default function ArticleList({ children, title }: Props) {
    return (
        /**
         * mx-auto, w-full, max-w : achieves dynamic width adjustment and caps out at 45rem
         */
        <section className="rounded-m border-light flex flex-col gap-3 p-4">
            {/* Title */}
            <h2 className="-mx-4 border-b px-4 pb-2 text-xl font-semibold lg:text-2xl">
                {title}
            </h2>
            {children}
        </section>
    )
}
