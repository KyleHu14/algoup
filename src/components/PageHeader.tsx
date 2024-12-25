interface PageHeaderProps {
    className?: string
    children?: React.ReactNode
}

const PageHeader = ({ children, className }: PageHeaderProps) => {
    return (
        <div
            className={`mb-10 flex w-full flex-col gap-2 text-left sm:gap-3 ${className}`}
        >
            {children}
        </div>
    )
}

interface PageHeaderTitleProps {
    children?: React.ReactNode
}
const PageHeaderTitle = ({ children }: PageHeaderTitleProps) => {
    return (
        <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl 2xl:text-5xl">
            {children}
        </h1>
    )
}

interface PageHeaderSubTitleProps {
    children?: React.ReactNode
}
const PageHeaderSubTitle = ({ children }: PageHeaderSubTitleProps) => {
    return (
        <p className="text-lg text-typography-secondary sm:text-xl 2xl:text-2xl">
            {children}
        </p>
    )
}

export { PageHeader, PageHeaderTitle, PageHeaderSubTitle }
