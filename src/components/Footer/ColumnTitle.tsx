interface Props {
    text: string
}

export default function ColumnTitle({ text }: Props) {
    return (
        <h1 className="text-secondary text-xl font-semibold lg:text-2xl">
            {text}
        </h1>
    )
}
