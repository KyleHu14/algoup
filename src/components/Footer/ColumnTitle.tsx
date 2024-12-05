interface Props {
    text: string
}

export default function ColumnTitle({ text }: Props) {
    return (
        <h1 className="text-xl font-semibold text-typography-main lg:text-2xl">
            {text}
        </h1>
    )
}
