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
    className?: string
    children?: React.ReactNode
}
const PageHeaderTitle = ({ children, className }: PageHeaderTitleProps) => {
    return (
        <h1
            className={`text-2xl font-bold sm:text-3xl md:text-4xl 2xl:text-5xl ${className}`}
        >
            {children}
        </h1>
    )
}

interface PageHeaderSubTitleProps {
    className?: string
    children?: React.ReactNode
}
const PageHeaderSubTitle = ({
    children,
    className,
}: PageHeaderSubTitleProps) => {
    return <p className={`text-lg sm:text-xl ${className}`}>{children}</p>
}

export { PageHeader, PageHeaderTitle, PageHeaderSubTitle }
