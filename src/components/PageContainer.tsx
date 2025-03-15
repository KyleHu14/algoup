interface Props {
    paddingVariant?: "standard" | "none"
    className?: string
    children: React.ReactNode
}

export default function PageContainer({
    children,
    className,
    paddingVariant = "standard",
}: Props) {
    const paddingClass = {
        standard:
            "px-5 py-10 sm:px-10 md:px-[10%] md:py-20 lg:px-[15%] xl:px-[20%] xl:py-24",
        none: "",
    }

    return (
        <main className={`${paddingClass[paddingVariant]} ${className}`}>
            {children}
        </main>
    )
}
