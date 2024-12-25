interface PageSectionProps {
    children: React.ReactNode
}

const PageSection = ({ children }: PageSectionProps) => {
    return (
        <section className="mb-5 flex max-w-[70rem] flex-col gap-3 md:mb-9 lg:mb-12">
            {children}
        </section>
    )
}

interface PageSectionTitleProps {
    children: React.ReactNode
}

const PageSectionTitle = ({ children }: PageSectionTitleProps) => {
    return (
        <h2 className="text-xl font-semibold sm:text-2xl md:text-3xl">
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
            className={`text-justify sm:text-lg md:text-xl xl:text-2xl ${className}`}
        >
            {children}
        </p>
    )
}

export { PageSection, PageSectionTitle, PageSectionText }
