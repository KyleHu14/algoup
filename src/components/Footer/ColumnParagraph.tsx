interface Props {
    className?: string
    children: React.ReactNode
}

export default function ColumnParagraph({ className, children }: Props) {
    return (
        <p className={`font-light text-zinc-600 2xl:text-xl ${className}`}>
            {children}
        </p>
    )
}
