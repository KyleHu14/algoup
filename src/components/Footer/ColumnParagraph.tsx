interface Props {
    className?: string
    children: React.ReactNode
}

export default function ColumnParagraph({ className, children }: Props) {
    return (
        <p className={`text-typography-secondary/90 2xl:text-xl ${className}`}>
            {children}
        </p>
    )
}
