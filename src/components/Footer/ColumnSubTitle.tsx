interface Props {
    children: React.ReactNode
}

export default function ColumnSubTitle({ children }: Props) {
    return (
        <h2 className="text-md text-zinc-700 lg:text-lg 2xl:text-xl">
            {children}
        </h2>
    )
}
