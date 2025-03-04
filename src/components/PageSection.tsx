interface PageSectionProps {
    spacing?: "base" | "lg" | "sm"
    children: React.ReactNode
}

const PageSection = ({ spacing = "base", children }: PageSectionProps) => {
    type MarginKeys = "base" | "lg" | "sm"
    const margins: Record<MarginKeys, string> = {
        sm: "md:mb-7 lg:mb-9 xl:mb-10",
        base: "md:mb-9 lg:mb-12",
        lg: "md:mb-9 lg:mb-12 xl:mb-20",
    }

    return (
        <section
            className={`mb-5 flex max-w-[70rem] flex-col gap-3 ${margins[spacing]}`}
        >
            {children}
        </section>
    )
}

interface PageSectionTitleProps {
    children: React.ReactNode
    className?: string
}

const PageSectionTitle = ({ children, className }: PageSectionTitleProps) => {
    return (
        <h2
            className={`text-xl font-semibold sm:text-2xl md:text-3xl ${className}`}
        >
            {children}
        </h2>
    )
}

interface PageSectionTextProps {
    className?: string
    children: React.ReactNode
}

const PageSectionText = ({ children, className }: PageSectionTextProps) => {
    return (
        <p
            className={`whitespace-pre-line text-justify sm:text-lg md:text-xl ${className}`}
        >
            {children}
        </p>
    )
}

export { PageSection, PageSectionTitle, PageSectionText }
