interface PageHeaderProps {
    children?: React.ReactNode
}

const PageHeader = ({ children }: PageHeaderProps) => {
    return (
        <header className="flex flex-col justify-center gap-1 border-b pb-12 pt-20 text-center sm:gap-3">
            {children}
        </header>
    )
}

interface PageHeaderTitleProps {
    children?: React.ReactNode
}
const PageHeaderTitle = ({ children }: PageHeaderTitleProps) => {
    return (
        <h1 className="text-xl font-bold text-algoup-accent-dark sm:text-2xl md:text-3xl 2xl:text-4xl">
            {children}
        </h1>
    )
}

interface PageHeaderSubTitleProps {
    children?: React.ReactNode
}
const PageHeaderSubTitle = ({ children }: PageHeaderSubTitleProps) => {
    return (
        <p className="text-md text-typography-secondary sm:text-xl">
            {children}
        </p>
    )
}

export { PageHeader, PageHeaderTitle, PageHeaderSubTitle }
