interface Props {
    title: string
    children: React.ReactNode
}

export default function ArticleList({ children, title }: Props) {
    return (
        /**
         * mx-auto, w-full, max-w : achieves dynamic width adjustment and caps out at 45rem
         */
        <section className="flex w-full flex-col gap-3 rounded-md bg-background-dark p-4">
            {/* Title */}
            <h2 className="w-full border-b-2 border-b-secondary text-lg font-semibold">
                {title}
            </h2>
            {children}
        </section>
    )
}
