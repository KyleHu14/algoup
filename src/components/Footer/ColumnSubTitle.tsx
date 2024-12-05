interface Props {
    className?: string
    children: React.ReactNode
}

export default function ColumnSubTitle({ children, className }: Props) {
    return (
        <h2
            className={`text-lg text-typography-main/90 2xl:text-xl ${className}`}
        >
            {children}
        </h2>
    )
}
